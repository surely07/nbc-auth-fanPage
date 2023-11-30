import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CommentInfoBox, CommentFont } from "style/Theme";
import { useSelector } from "react-redux";

function LettersList() {
  const letters = useSelector((state) => state.letters);
  const selectedMemberName = useSelector((state) => state.member);

  const navigate = useNavigate();

  const filteredComments =
    selectedMemberName !== "all"
      ? letters.filter((comment) => comment.writedTo === selectedMemberName)
      : letters;

  return (
    <CommentWindow>
      <h2>Letter to your HERO!</h2>

      {filteredComments.length === 0 ? (
        <NoComment>
          당신의 HERO, <span>{selectedMemberName}</span> 선수에게 첫 번째
          팬레터를 보내세요!.
        </NoComment>
      ) : (
        filteredComments.map((comment) => (
          <ul key={comment.id}>
            <StyledLink to={`/detail/${comment.id}`}>
              <CommentInfoBox onClick={() => navigate(`/detail/${comment.id}`)}>
                <figure>
                  <img src={comment.avatar} alt={comment.nickname}></img>
                </figure>
                <div>
                  <CommentInfo>
                    <div>
                      <CommentFont fontSize="15px" fontWeight="500">
                        {comment.nickname}
                      </CommentFont>
                      <CommentFont fontSize="11px">
                        {comment.createdAt}
                      </CommentFont>
                    </div>
                    <div>
                      <h3>To.{comment.writedTo}</h3>
                    </div>
                  </CommentInfo>
                  <CommentContents>{comment.content}</CommentContents>
                </div>
              </CommentInfoBox>
            </StyledLink>
          </ul>
        ))
      )}
    </CommentWindow>
  );
}

export default LettersList;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CommentWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 20px;

  h2 {
    color: #0b0e1e;
    background-color: #9de757;
    font-size: 20px;
    font-weight: 500;
    width: 800px;
    height: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  ul {
    border: 2px solid #9de757;
    color: white;
    width: 800px;
    height: fit-content;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 30px;
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
      transition: transform 0.5s;
    }
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  ${StyledLink} {
    text-decoration-line: none;
  }
`;

const CommentInfo = styled.div`
  width: 641px;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommentContents = styled.p`
  width: 640px;
  font-size: 14px;
  line-height: 1.3;
  border-radius: 7px;
  margin-top: 10px;
  padding: 10px;
  color: #0b0e1e;
  background-color: #dfdede;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const NoComment = styled.div`
  color: white;
  span {
    color: #9de757;
  }
`;

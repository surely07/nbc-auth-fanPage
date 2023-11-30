import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CommentInfoBox, CommentFont } from "style/Theme";
import DetailBtn from "components/DetailBtn";
import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const [editedContent, setEditedContent] = useState("");
  const letters = useSelector((state) => state.letters);
  const selectedComment = letters.find((comment) => comment.id === id);

  return (
    <div>
      {selectedComment && (
        <CommentDetailBox key={selectedComment.id}>
          <CommentInfoBox>
            <figure>
              <Avatar
                src={selectedComment.avatar}
                alt={selectedComment.nickname}
              ></Avatar>
            </figure>
            <CommentInfo>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  lineHeight: "1.3",
                }}
              >
                <h3>To.{selectedComment.writedTo}</h3>
                <CommentFont fontSize="20px" fontWeight="500">
                  {selectedComment.nickname}
                </CommentFont>
                <CommentFont fontSize="13px" fontWeight="200">
                  {selectedComment.createdAt}
                </CommentFont>
              </div>
            </CommentInfo>
          </CommentInfoBox>
          <DetailBtn
            comment={selectedComment}
            editedContent={editedContent}
            setEditedContent={setEditedContent}
            id={id}
          />
        </CommentDetailBox>
      )}
    </div>
  );
}
export default Detail;

const CommentDetailBox = styled.div`
  border: 2px solid #9de757;
  color: white;
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 50px auto;
  gap: 30px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const CommentInfo = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

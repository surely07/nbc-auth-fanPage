import React, { useState } from "react";
import uuid from "react-uuid";
import axios from "axios";
import styled from "styled-components";
import { Btn } from "style/Theme";
import { addLetter } from "redux/modules/lettersSlice";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "redux/modules/memberSlice";

function InputBox() {
  const selectedMemberName = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const { userId, userNickName, avatar } = useSelector((state) => state.auth);

  // const [setName] = useState("");
  const [comment, setComment] = useState("");
  // const [member, setMember] = useState("all");

  const commentSubmitHandler = async (e) => {
    e.preventDefault();

    let now = new Date();

    const newComment = {
      createdAt: String(now.toLocaleString()),
      nickname: userNickName,
      avatar,
      content: comment,
      writedTo: selectedMemberName,
      id: uuid(),
      userId,
    };

    if (!comment) {
      alert("내용을 입력하세요!");
    } else {
      await axios.post("http://localhost:3001/letters", newComment);
      await axios.get("http://localhost:3001/letters");

      dispatch(addLetter(newComment));
      // setName(userNickName);
      setComment("");
    }
  };

  return (
    <div>
      <PostBox onSubmit={commentSubmitHandler} id={comment}>
        <div>
          <label htmlFor="nickname">닉네임</label>
          {userNickName}
        </div>
        <div>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="최대 100자까지 작성할 수 있습니다."
            maxLength="100"
            rows="4"
            cols="50"
            wrap="on"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <StSelectWrapper>
          <div>
            <label htmlFor="select">Letter To</label>
            <select
              id="select"
              value={selectedMemberName}
              onChange={(e) => dispatch(setMember(e.target.value))}
            >
              <option>all</option>
              <option>Heung-Min Son</option>
              <option>James Maddison</option>
              <option>Destiny Udogie</option>
              <option>Eric Dier</option>
              <option>Guglielmo Vicario</option>
            </select>
          </div>

          <Btn type="submit">등록</Btn>
        </StSelectWrapper>
      </PostBox>
    </div>
  );
}

export default InputBox;

const PostBox = styled.form`
  background-color: #e4e2e2;
  width: 800px;
  height: fit-content;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  & label {
    font-weight: 700;
    width: 80px;
  }

  & div {
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-bottom: 25px;
  }

  & textarea {
    width: 100%;
    height: 90px;
    padding: 5px;
    resize: none;
    border: none;
    margin-left: 14px;
  }

  & input {
    width: 550px;
    height: 35px;
    padding: 5px;
    border: none;
  }
  & select {
    height: 25px;
    border-radius: 2px;
  }
`;

const StSelectWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

import React, { useState } from "react";
import uuid from "react-uuid";
import axios from "axios";
import styled from "styled-components";
import { Btn, BtnArea } from "style/Theme";
import { addLetter } from "redux/modules/letters";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "redux/modules/member";

function InputBox() {
  const selectedMemberName = useSelector((state) => state.member);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  // const [member, setMember] = useState("all");

  const commentSubmitHandler = async (e) => {
    e.preventDefault();

    let now = new Date();

    const newComment = {
      createdAt: String(now.toLocaleString()),
      nickname: name,
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/36.jpg",
      content: comment,
      writedTo: selectedMemberName,
      id: uuid(),
    };

    if (!name || !comment) {
      alert("닉네임과 내용을 모두 입력하세요!");
    } else {
      await axios.post("http://localhost:3001/commentData", newComment);
      await axios.get("http://localhost:3001/commentData");

      dispatch(addLetter(newComment));
      setName("");
      setComment("");
    }
  };

  return (
    <div>
      <PostBox onSubmit={commentSubmitHandler} id={comment}>
        <section>
          <div>
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              type="text"
              placeholder="최대 20자까지 작성할 수 있습니다."
              maxLength="20"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
        </section>
        <BtnArea>
          <div>
            <label htmlFor="select">To</label>&nbsp;
            <select
              id="select"
              value={selectedMemberName}
              onChange={(e) => dispatch(setMember(e.target.value))}
              // (e) => setSelectedMemberName(e.target.value)
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
        </BtnArea>
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
  padding: 80px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  section {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    div {
      gap: 20px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  textarea {
    width: 550px;
    height: 80px;
    padding: 5px;
    resize: none;
    border: none;
  }

  input {
    width: 550px;
    height: 35px;
    padding: 5px;
    border: none;
  }
`;

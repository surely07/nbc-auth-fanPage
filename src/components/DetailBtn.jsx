import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { Btn, BtnArea } from "style/Theme";
import { useDispatch } from "react-redux";
import { setLetter } from "redux/modules/letters";

function DetailBtn({ comment, editedContent, setEditedContent, id }) {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteBtn = async () => {
    const answer = window.confirm("정말로 삭제하시겠습니까?");
    if (!answer) return;

    await axios.delete(`http://localhost:3001/commentData/${id}`);
    const response = await axios.get("http://localhost:3001/commentData");
    navigate("/");
    dispatch(setLetter(response.data));
  };

  const handleSaveBtn = async () => {
    if (!editedContent) {
      alert("수정사항이 없습니다.");
      return;
    }
    //  db 변경
    await axios.patch(`http://localhost:3001/commentData/${id}`, {
      content: editedContent,
    });

    // 최신 db 불러오기
    const response = await axios.get("http://localhost:3001/commentData");
    dispatch(setLetter(response.data));
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <Comment>
            <Textarea
              autoFocus
              defaultValue={comment.content}
              onChange={(e) => setEditedContent(e.target.value)}
            ></Textarea>
          </Comment>

          <BtnArea>
            <Btn onClick={() => setIsEditing(false)}>취소</Btn>
            <Btn onClick={handleSaveBtn}>저장</Btn>
          </BtnArea>
        </>
      ) : (
        <>
          <Comment>{comment.content}</Comment>
          <BtnArea>
            <Btn onClick={() => setIsEditing(true)}>수정</Btn>
            <Btn onClick={handleDeleteBtn}>삭제</Btn>
          </BtnArea>
        </>
      )}
    </div>
  );
}

export default DetailBtn;

const Comment = styled.div`
  color: #0b0e1e;
  line-height: 1.5;
  width: 650px;
  height: 230px;
  background-color: #e4e2e2;
  padding: 30px;
  border-radius: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  resize: none;
  line-height: 1.5;
`;

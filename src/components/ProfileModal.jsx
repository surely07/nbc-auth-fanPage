import React, { useState } from "react";
import styled from "styled-components";
import { setUserNickName, setUserAvatar } from "redux/modules/authSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Avatar from "common/Avatar";
import { setLetter } from "redux/modules/lettersSlice";

function ProfileModal({ setIsModalVisible }) {
  const dispatch = useDispatch();
  const { userAvata, userNickName, userId } = useSelector(
    (state) => state.auth
  );
  const { letters } = useSelector((state) => state.letters);

  const [tempUserNickName, setTempUserNickName] = useState(userNickName);
  const [selectedAvatarFile, setSelectedAvatarFile] = useState(null);

  const editAvataHandler = (e) => {
    const file = e.target.files[0];
    setSelectedAvatarFile(file);
  };

  const onEditNicknameHandler = (e) => {
    e.preventDefault();
    setTempUserNickName(e.target.value);
  };

  const saveBtnHandler = async () => {
    const BASE_URL = "https://moneyfulpublicpolicy.co.kr";
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);

    try {
      const formData = new FormData();
      formData.append("avatar", selectedAvatarFile);
      formData.append("nickname", tempUserNickName);

      await axios.patch(
        `${BASE_URL}/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "multipart/form-data",
          },
        }
        // { withCredentials: true }
      );
      const getUser = await axios.get(`${BASE_URL}/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const { nickname, avatar } = getUser.data;

      localStorage.setItem("nickname", nickname);
      localStorage.setItem("avatar", avatar);

      dispatch(setUserNickName(nickname));
      dispatch(setUserAvatar(avatar));
      console.log(userNickName);

      letters
        .filter((comment) => comment.userId === userId)
        .map(async (letter) => {
          const id = letter.id;
          await axios.patch(`http://localhost:3001/letters/${id}`, {
            avatar: userAvata,
            nickname: userNickName,
          });
        });

      const response = await axios.get("http://localhost:3001/letters");
      console.log(response.data);
      dispatch(setLetter(response.data));
      setIsModalVisible(false);
    } catch (error) {
      console.error("회원정보 수정 실패 :", error);
      alert("수정 사항을 바르게 입력하세요.");
    }
  };

  const cancelBtnHandler = () => {
    setIsModalVisible(false);
  };

  return (
    <StOverlay>
      <StLoginContainer>
        <label htmlFor="edit-user-nickname">회원정보 수정</label>
        <StLoginForm>
          <Avatar src={userAvata} />
          <input type="file" accept="image/*" onChange={editAvataHandler} />
          <input
            id="edit-user-nickname"
            value={tempUserNickName}
            onChange={onEditNicknameHandler}
            type="text"
            placeholder="닉네임 (1~10글자)"
            minLength={1}
            maxLength={10}
          />
        </StLoginForm>
        <StLoginBtn $backgroundColor="lightgray" onClick={cancelBtnHandler}>
          취소
        </StLoginBtn>
        <StLoginBtn onClick={saveBtnHandler}>저장</StLoginBtn>
      </StLoginContainer>
    </StOverlay>
  );
}

export default ProfileModal;

const StOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const StLoginContainer = styled.div`
  width: 350px;
  min-height: 350px;
  margin: 100px auto;
  padding: 40px 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  background-color: white;
  z-index: 101;

  & label {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
  }
`;

const StLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  & input {
    height: 40px;
    padding: 5px;
  }
`;

const StLoginBtn = styled.button`
  height: 45px;
  border: none;
  border-radius: 3px;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "#9de757"};
  cursor: pointer;
`;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Avatar from "common/Avatar";
import { Btn } from "style/Theme";
import ProfileModal from "components/ProfileModal";

function Profile() {
  const { userId, userNickName, userAvatar } = useSelector(
    (state) => state.auth
  );

  const [isModalVisible, setIsModalVisible] = useState(false);

  const editInfoBtnHandler = () => {
    setIsModalVisible(true);
  };

  return (
    <StProfileContainer>
      <StUserInfo>
        <Avatar src={userAvatar} />
        <div>
          <p>
            <span>아이디 </span>
            {userId}
          </p>
          <h4>
            <span>닉네임 </span>
            {userNickName}
          </h4>
        </div>
      </StUserInfo>
      <Btn
        onClick={editInfoBtnHandler}
        width="fitContents"
        height="30px"
        $borderRadius="5px"
      >
        회원정보 수정
      </Btn>
      {isModalVisible && <ProfileModal setIsModalVisible={setIsModalVisible} />}
    </StProfileContainer>
  );
}

export default Profile;

const StProfileContainer = styled.div`
  background-color: #e4e2e2;
  width: 800px;
  height: fit-content;
  margin: 30px auto;
  margin-bottom: 50px;
  padding: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 101;
`;

const StUserInfo = styled.div`
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  & span {
    color: #0b0e1e;
    font-weight: 700;
  }
`;

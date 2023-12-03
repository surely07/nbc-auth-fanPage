import axios from "axios";
import React from "react";
// import { Cookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setUserId,
  setUserPassword,
  setUserNickName,
  setUserAvatar,
  signUp,
} from "redux/modules/authSlice";
import styled from "styled-components";
import { logIn } from "redux/modules/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSignedUp, userId, userPassword, userNickName, isLoggedIn } =
    useSelector((state) => state.auth);

  const onLogInButtonHandler = async (e) => {
    e.preventDefault();
    const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

    try {
      const response = await axios.post(
        `${BASE_URL}/login`,
        {
          id: userId,
          password: userPassword,
        }
        // { withCredentials: true }
      );

      const accessToken = response.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("id", response.data.userId);
      localStorage.setItem("nickname", response.data.nickname);
      localStorage.setItem("avatar", response.data.avatar);
      console.log(accessToken);

      const getUser = await axios.get(`${BASE_URL}/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const { id, nickname, avatar } = getUser.data;

      if (accessToken) {
        dispatch(logIn(true));
        dispatch(setUserId(id));
        dispatch(setUserNickName(nickname));
        dispatch(setUserAvatar(avatar));

        console.log(userId);

        setTimeout(() => {
          console.log(isLoggedIn);
          navigate("/");
        }, 0);
      }
    } catch (error) {
      console.error("로그인 실패 :", error);
      alert("아이디와 패스워드를 바르게 입력하세요.");
    }
  };

  const onSignUpButtonHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const loginToggleHandler = () => {
    dispatch(signUp(!isSignedUp));
    console.log(isSignedUp);
  };

  return (
    <StLoginContainer>
      <label htmlFor="login-id"> {isSignedUp ? "로그인" : "회원가입"}</label>

      <StLoginForm
        onSubmit={isSignedUp ? onLogInButtonHandler : onSignUpButtonHandler}
      >
        <input
          id="login-id"
          autoFocus
          value={userId}
          onChange={(e) => dispatch(setUserId(e.target.value))}
          type="text"
          placeholder="아이디 (4~10글자)"
          minLength={4}
          maxLength={10}
        />
        <input
          id="login-password"
          value={userPassword}
          onChange={(e) => dispatch(setUserPassword(e.target.value))}
          type="password"
          placeholder="비밀번호 (4~15글자)"
          minLength={4}
          maxLength={15}
        />
        {!isSignedUp && (
          <input
            id="login-nickname"
            value={userNickName}
            onChange={(e) => dispatch(setUserNickName(e.target.value))}
            type="text"
            placeholder="닉네임 (1~10글자)"
            minLength={1}
            maxLength={10}
          />
        )}

        {isSignedUp ? (
          <StLoginWrapper>
            <StLoginBtn type="submit">로그인</StLoginBtn>
          </StLoginWrapper>
        ) : (
          <StLoginWrapper>
            <StLoginBtn type="sbmit">회원가입</StLoginBtn>
          </StLoginWrapper>
        )}
      </StLoginForm>
      <StLoginBtn onClick={loginToggleHandler} $backgroundColor="lightgray">
        {isSignedUp ? "회원가입" : "로그인"}
      </StLoginBtn>
    </StLoginContainer>
  );
}

export default Login;

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

const StLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

const StLoginBtn = styled.button`
  height: 45px;
  border: none;
  border-radius: 3px;
  background-color: ${(props) =>
    props.$backgroundColor ? props.$backgroundColor : "#9de757"};
  cursor: pointer;
`;

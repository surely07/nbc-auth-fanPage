import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  logIn,
  setUserId,
  setUserPassword,
  setUserNickName,
  SignUp,
} from "redux/modules/authSlice";
import styled from "styled-components";

function Login() {
  const dispatch = useDispatch();
  const { isSignedUp, userId, userPassword, userNickName } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  const onLogInButtonHandler = (e) => {
    e.preventDefault();
    dispatch(logIn());
    navigate("/");
    // dispatch(setUserId(""));
    // dispatch(setUserPassword(""));
    // dispatch(setUserNickName(""));
  };

  const onSignUpButtonHandler = (e) => {
    e.preventDefault();
    // dispatch(SignUp(true));
  };

  const loginToggleHandler = () => {
    dispatch(SignUp());
  };

  return (
    <StLoginContainer>
      <label> {isSignedUp ? "로그인" : "회원가입"}</label>
      <StLoginForm
        onSubmit={isSignedUp ? onLogInButtonHandler : onSignUpButtonHandler}
      >
        <input
          autoFocus
          value={userId}
          onChange={(e) => dispatch(setUserId(e.target.value))}
          type="text"
          placeholder="아이디 (4~10글자)"
          minLength={4}
          maxLength={10}
        />
        <input
          value={userPassword}
          onChange={(e) => dispatch(setUserPassword(e.target.value))}
          type="text"
          placeholder="비밀번호 (4~15글자)"
          minLength={4}
          maxLength={15}
        />
        {!isSignedUp && (
          <input
            value={userPassword}
            onChange={setUserNickName((e) => e.target.value)}
            type="text"
            placeholder="닉네임 (4~10글자)"
            minLength={1}
            maxLength={10}
          />
        )}

        {isSignedUp ? (
          <StLoginWrapper>
            <StLoginBtn type="submit" backgroundColor="#9de757">
              로그인
            </StLoginBtn>
            <StLoginBtn
              onClick={loginToggleHandler}
              backgroundColor="lightgray"
            >
              회원가입
            </StLoginBtn>
          </StLoginWrapper>
        ) : (
          <StLoginWrapper>
            <StLoginBtn type="sbmit" backgroundColor="#9de757">
              회원가입
            </StLoginBtn>
            <StLoginBtn
              onClick={loginToggleHandler}
              backgroundColor="lightgray"
            >
              로그인
            </StLoginBtn>
          </StLoginWrapper>
        )}
      </StLoginForm>
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
  gap: 20px;
  background-color: white;
  & label {
    font-size: 30px;
    font-weight: 600;
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
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
`;

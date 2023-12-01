import React from "react";
// import { Cookies } from "react-cookie";
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
import { login } from "apis/login";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSignedUp, userId, userPassword, userNickName } = useSelector(
    (state) => state.auth
  );

  // const BASE_URL = "https://moneyfulpublicpolicy.co.kr";
  // const cookies = new Cookies();

  // const requestLogin = async (id, password) => {
  //   return await axios.post(
  //     `${BASE_URL}/login`,
  //     {
  //       id: userId,
  //       password: userPassword,
  //     },
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //   .then((response) => {
  //     axios.defaults.headers.common[
  //       "Authorization"
  //     ] = `Baarer ${response.data.access_token}`;
  //     return response.data
  //   })
  //   .catch((e) => {
  //     console.log(e.response.data);
  //     return "이메일 혹은 비밀번호를 확인하세요"
  //   })
  // };

  const onLogInButtonHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await login(userId, userPassword);

      // Check if the login was successful
      if (response && response.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        dispatch(logIn());
        navigate("/");
      } else {
        // Handle unsuccessful login (show an error message or take appropriate action)
        console.error("Login failed: Invalid response from the server");
      }
    } catch (error) {
      // Handle login error (show an error message or take appropriate action)
      console.error("Login failed :", error);
    }

    // try {
    //   const response = await login(userId, userPassword);
    //   console.log(response);
    //   const { accessToken } = response;
    //   localStorage.setItem("accessToken", accessToken);

    dispatch(logIn());
    navigate("/");
    // } catch (error) {
    //   console.error("Login failed :", error);
    // }

    // dispatch(setUserId(userId));
    // dispatch(setUserPassword(userPassword));
    // dispatch(setUserNickName(userNickName));
    // console.log("login response :", response);

    // dispatch(setUserPassword(""));
  };

  const onSignUpButtonHandler = (e) => {
    e.preventDefault();
    navigate("/");
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
          type="password"
          placeholder="비밀번호 (4~15글자)"
          minLength={4}
          maxLength={15}
        />
        {!isSignedUp && (
          <input
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
            <StLoginBtn type="submit" backgroundColor="#9de757">
              로그인
            </StLoginBtn>
          </StLoginWrapper>
        ) : (
          <StLoginWrapper>
            <StLoginBtn type="sbmit" backgroundColor="#9de757">
              회원가입
            </StLoginBtn>
          </StLoginWrapper>
        )}
      </StLoginForm>
      {isSignedUp ? (
        <StLoginBtn onClick={loginToggleHandler} backgroundColor="lightgray">
          회원가입
        </StLoginBtn>
      ) : (
        <StLoginBtn onClick={loginToggleHandler} backgroundColor="lightgray">
          로그인
        </StLoginBtn>
      )}
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

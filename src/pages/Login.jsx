import React, { useState } from "react";
import styled from "styled-components";

function Login() {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  //   const member = useSelector();
  //   console.log(member);

  const onLoginButtonHandler = (e) => {
    e.preventDefault();
    alert("로그인");
  };

  return (
    <StLoginContainer>
      <label>로그인</label>
      <StLoginForm onSubmit={onLoginButtonHandler}>
        <input
          autoFocus
          //   value={userId}
          //   onChange={(e) => setUserId(e.target.value)}
          type="text"
          placeholder="아이디 (4~10글자)"
          minLength={4}
          maxLength={10}
        />
        <input
          //   value={userPassword}
          //   onChange={(e) => setUserPassword(e.target.value)}
          type="text"
          placeholder="비밀번호 (4~15글자)"
          minLength={4}
          maxLength={15}
        />
        {!isSubscribed && (
          <input
            // value={userPassword}
            // onChange={setUserPassword((e) => e.target.value)}
            type="text"
            placeholder="닉네임 (4~10글자)"
            minLength={1}
            maxLength={10}
          />
        )}
        <button type="submit" disabled={!userId || !userPassword}>
          {isSubscribed ? "로그인" : "회원가입"}
        </button>
        <p>{isSubscribed ? "회원가입" : "로그인"}</p>
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
  & button {
    height: 50px;
    border: none;
    border-radius: 3px;
    background-color: #9de757;
  }
`;

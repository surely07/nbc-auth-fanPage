import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMember } from "redux/modules/memberSlice";
import { logIn } from "redux/modules/authSlice";

function Header() {
  // const selectedMemberName = useSelector((state) => state.members);
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.letters);

  const onLogOutButtonHandler = () => {
    dispatch(logIn());
  };

  return (
    <HeaderBox>
      <button onClick={onLogOutButtonHandler}>로그아웃</button>
      <StLink to="/" onClick={() => dispatch(setMember("all"))}>
        <HeaderFont>Tottenham Hotspur Fan Page</HeaderFont>
      </StLink>
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #9de757;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderFont = styled.h1`
  color: white;
  font-size: 40px;
  padding: 20px;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

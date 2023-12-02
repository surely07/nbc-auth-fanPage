import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "style/Theme";

function Layout({ children }) {
  const navigate = useNavigate();

  const onMoveHomeHandler = () => {
    navigate("/");
  };

  const onMoveProfileHandler = () => {
    navigate("/profile");
  };
  const onMoveLogoutHandler = () => {
    navigate("/login");
  };

  return (
    <div>
      <StNavigation>
        <div>
          <Btn onClick={onMoveHomeHandler} $borderRadius="3px">
            Home
          </Btn>
        </div>
        <div>
          <Btn onClick={onMoveProfileHandler} $borderRadius="3px">
            내 프로필
          </Btn>
          <Btn
            onClick={onMoveLogoutHandler}
            $borderRadius="3px"
            $backgroundColor="lightgray"
            color="#0b0e1e"
          >
            로그아웃
          </Btn>
        </div>
      </StNavigation>

      <Outlet>{children}</Outlet>
    </div>
  );
}

export default Layout;

const StNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 560px;
  margin: 30px auto;
  color: white;
  & div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

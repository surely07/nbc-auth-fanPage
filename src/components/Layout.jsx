import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { setMember } from "redux/modules/memberSlice";
import { useDispatch } from "react-redux";

function Layout({ children }) {
  const dispatch = useDispatch();
  return (
    <div>
      <StNavigation>
        <Link to="/" onClick={() => dispatch(setMember("all"))}>
          Home
        </Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">LogOut</Link>
      </StNavigation>

      <Outlet>{children}</Outlet>
    </div>
  );
}

export default Layout;

const StNavigation = styled.div`
  padding: 25px;
  background-color: #e4e2e2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  & a {
    color: #0b0e1e;
    font-size: 20px;
    font-weight: 700;
    text-decoration: none;
  }
`;

import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { setMember } from "redux/modules/memberSlice";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "redux/modules/authSlice";

function Layout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { userId } = useParams();
  // console.log(userId);

  const { userId } = useSelector((state) => state.auth);
  // console.log(isLoggedIn);

  const onLogOutHandler = () => {
    const token = localStorage.getItem("accessToken");
    const userId = localStorage.getItem("id");

    navigate(`/profile/${userId}`);

    localStorage.clear(token);
    // window.location.replace('/login')
    dispatch(logIn(false));
  };

  return (
    <div>
      <StNavigation>
        <Link to="/" onClick={() => dispatch(setMember("all"))}>
          Home
        </Link>
        <Link to={`/profile/${userId}`}>Profile</Link>
        <Link to="/login" onClick={onLogOutHandler}>
          LogOut
        </Link>
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

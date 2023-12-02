import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Layout() {
  const { id } = useParams();

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/profile/:${id}">내 프로필</Link>
        <Link to="/login">로그아웃</Link>
      </nav>
    </div>
  );
}

export default Layout;

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const currentLocation = useLocation();

  return isLoggedIn ? (
    <Outlet>{children}</Outlet>
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{ redirectedFrom: currentLocation }}
    />
  );
};

// const PrivateRoute = ({ authenticated, component: Component }) => {
//   return authenticated ? (
//     Component
//   ) : (
//     <Navigate to="/login" {...alert("로그인이 필요합니다.")}></Navigate>
//   );
// };

export default ProtectedRoute;

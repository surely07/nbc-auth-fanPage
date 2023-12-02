const { useSelector } = require("react-redux");
const { useLocation, Navigate } = require("react-router-dom");

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const currentLocation = useLocation();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{ redirectedFrom: currentLocation }}
    />
  );
};

export default ProtectedRoute;

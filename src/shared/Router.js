import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Footer from "components/Footer";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { useSelector } from "react-redux";

const Router = () => {
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

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        {/* 로그인 전용 */}
        <Route element={<ProtectedRoute />}>
          <Route index path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

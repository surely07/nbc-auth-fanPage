import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Footer from "components/Footer";
import Login from "pages/Login";
import Profile from "pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="login" element={<Login />} />
        {/* 로그인 전용 */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

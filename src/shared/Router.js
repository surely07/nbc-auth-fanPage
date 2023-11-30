import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Footer from "components/Footer";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { useDispatch } from "react-redux";
import { setLetter } from "redux/modules/lettersSlice";

// const PrivateRoute = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

// useEffect(() => {
//   const token =
// })

// };

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/letters");
      dispatch(setLetter(response.data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

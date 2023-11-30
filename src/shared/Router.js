import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Header from "components/Header";
import Home from "pages/Home";
import Detail from "pages/Detail";
import Footer from "components/Footer";
import { useDispatch } from "react-redux";
import { setLetter } from "redux/modules/letters";

const Router = () => {
  // const letters = useSelector((state) => state.letters);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3001/commentData");
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "shared/Router";
import GlobalStyle from "style/GlobalStyle";
import { __getLetters } from "redux/modules/lettersSlice";
import { __getUserData } from "redux/modules/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    dispatch(__getLetters());
    dispatch(__getUserData());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;

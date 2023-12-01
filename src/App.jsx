import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "shared/Router";
import GlobalStyle from "style/GlobalStyle";
import { __getLetters } from "redux/modules/lettersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getLetters());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;

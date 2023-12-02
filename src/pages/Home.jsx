import React from "react";
import { MainDisplay, MainContainer } from "style/Theme";
import MemberInfo from "components/MemberInfo";
import InputBox from "components/InputBox";
import Button from "components/Button";
import LettersList from "components/LetterList";
import { useSelector } from "react-redux";

function Home() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  console.log(isLoggedIn);
  return (
    <MainDisplay>
      <Button />
      <MainContainer>
        <MemberInfo />
      </MainContainer>
      <InputBox />
      <LettersList />
    </MainDisplay>
  );
}

export default Home;

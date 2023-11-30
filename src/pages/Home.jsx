import React from "react";
import { MainDisplay, MainContainer } from "style/Theme";
import MemberInfo from "components/MemberInfo";
import InputBox from "components/InputBox";
import Button from "components/Button";
import LettersList from "components/LetterList";

function Home() {
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

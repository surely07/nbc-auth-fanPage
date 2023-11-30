import React from "react";
import styled from "styled-components";
import { MainDisplay } from "style/Theme";

function Footer() {
  return (
    <MainDisplay>
      <FooterStyle>Tottenham Hotspur Fan Page</FooterStyle>;
    </MainDisplay>
  );
}

export default Footer;

const FooterStyle = styled.div`
  height: 100px;
  background-color: #dfdede;
  display: flex;
  align-items: center;
  justify-content: center;
`;

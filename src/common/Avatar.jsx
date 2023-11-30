import styled from "styled-components";
import avatar from "assets/avatar.png";

export default function Avatar({ src }) {
  return (
    <AvatarFigure>
      <img src={src ?? avatar} alt="아바타이미지" />
    </AvatarFigure>
  );
}

const AvatarFigure = styled.figure`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`;

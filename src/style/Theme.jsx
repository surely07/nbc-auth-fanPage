import styled from "styled-components";

export const MainDisplay = styled.div`
  height: fit-content;
`;

export const MainContainer = styled.div`
  width: 800px;
  height: 370px;
  margin: 0px auto;
  margin-bottom: 7px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 25px;
`;

export const MemberDetail = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: 1.6;
  display: flex;
  flex-direction: row;
`;

export const MemberNumber = styled.h2`
  color: #9de757;
  font-size: 80px;
  margin-left: 5px;
`;

export const BtnArea = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-top: 20px;
  gap: 20px;
`;

export const Btn = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  background-color: #9de757;
  color: #0b0e1e;
`;

export const CommentInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  h3 {
    display: flex;
    flex-direction: column;
    align-items: end;
    gap: 10px;
    font-size: 14px;
    color: #9de757;
    button {
      width: 50px;
      height: 20px;
      margin-left: 5px;
      border: none;
      background-color: #9de757;
      color: #0b0e1e;
    }
  }
`;

export const CommentFont = styled.h4`
  color: white;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: 1.6;
`;

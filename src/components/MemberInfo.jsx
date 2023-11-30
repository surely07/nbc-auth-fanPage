import React from "react";
import styled from "styled-components";
import { members } from "common/members";
import {
  MainDisplay,
  MainContainer,
  MemberDetail,
  MemberNumber,
} from "style/Theme";
import { useSelector } from "react-redux";

function MemberInfo() {
  const selectedMemberName = useSelector((state) => state.member);
  const selectedMember = members.find(
    (member) => member.name === selectedMemberName
  );

  if (!selectedMember) {
    return (
      <Banner
        src="https://cdne-totv8-prod-southeastasia.azureedge.net/media/25ljafct/spurs-son-celebration-2324-desk.jpg"
        alt="토트넘배너"
      />
    );
  }

  return (
    <div>
      <MainDisplay>
        <MainContainer>
          <div>
            <MemberImage src={selectedMember.Image} alt={selectedMember.name} />
          </div>
          <MemberNumber>{selectedMember.number}</MemberNumber>
          <div>
            <MemberDetail color="#4a5385" fontSize="25px" fontWeight="500">
              My HERO!
            </MemberDetail>
            <MemberDetail color="white" fontSize="40px" fontWeight="600">
              {selectedMember.name}
            </MemberDetail>
            <MemberDetail color="white" fontSize="18px" fontWeight="300">
              {selectedMember.country}
            </MemberDetail>
          </div>
        </MainContainer>
      </MainDisplay>
    </div>
  );
}

export default MemberInfo;

const MemberImage = styled.img`
  height: 350px;
`;

const Banner = styled.img`
  width: 800px;
  height: 370px;
  margin: 0px auto;
  margin-bottom: 60px;
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 25px;
  object-fit: contain;
`;

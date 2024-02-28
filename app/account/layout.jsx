'use client'

import styled from "styled-components"
import CardLayout from "../../src/components/CardLayout"

const AccountLayout = ({ banks, brideDad, brideDad_Account, groomDad, groomDad_Account, brideName, bride_Account, groomName, groom_Account }) => {
  return (
    <CardLayout>
      <StyledSection>
        <div><BoldSpan>신랑측 계좌번호</BoldSpan></div>
        <div>
          <span>{banks[Object.keys(groomDad_Account)[0]]}</span>
          <span> | </span>
          <span>{Object.values(groomDad_Account)[0]}</span>
          <span> {groomDad}</span>
        </div>
        <div>
          <span>{banks[Object.keys(groom_Account)[0]]}</span>
          <span> | </span>
          <span>{Object.values(groom_Account)[0]}</span>
          <span> {groomName}</span>
        </div>
      </StyledSection>
      <pre/>
      <StyledSection>
        <div><BoldSpan>신부측 계좌번호</BoldSpan></div>
        <div>
          <span>{banks[Object.keys(brideDad_Account)[0]]}</span>
          <span> | </span>
          <span>{Object.values(brideDad_Account)[0]}</span>
          <span> {brideDad}</span>
        </div>
        <div>
          <span>{banks[Object.keys(bride_Account)[0]]}</span>
          <span> | </span>
          <span>{Object.values(bride_Account)[0]}</span>
          <span> {brideName}</span>
        </div>
      </StyledSection>
    </CardLayout>
  );
};

export default AccountLayout;

const StyledSection = styled.section`
  margin : 25px 0;
  text-align:center;
  div {
    padding: 6px 0;
  }
`

const BoldSpan = styled.span`
  font-weight: bolder;
`
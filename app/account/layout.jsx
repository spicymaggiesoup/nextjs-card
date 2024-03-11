'use client'

import styled from "styled-components"
import CardLayout from "../../src/components/CardLayout"

const AccountLayout = ({ banks, brideDad, brideDad_Account, groomDad, groomDad_Account, brideName, bride_Account, groomName, groom_Account }) => {

  const bankText = (accounts) => 
    accounts instanceof Object && `${banks[Object.keys(accounts)[0]]} | ${Object.values(accounts)[0]}`
  ;

  return (
    <CardLayout>
      <StyledSection>
        <div><BoldSpan>신랑측 계좌번호</BoldSpan></div>
        <div>
          <span>{bankText(groomDad_Account)}</span>
          <span> {groomDad}</span>
        </div>
        <div>
          <span>{bankText(groom_Account)}</span>
          <span> {groomName}</span>
        </div>
      </StyledSection>
      <pre/>
      <StyledSection>
        <div><BoldSpan>신부측 계좌번호</BoldSpan></div>
        <div>
          <span>{bankText(brideDad_Account)}</span>
          <span> {brideDad}</span>
        </div>
        <div>
          <span>{bankText(bride_Account)}</span>
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
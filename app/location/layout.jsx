'use client'

import styled from "styled-components"
import CardLayout from "../../src/components/CardLayout"
import Map from "../../src/components/Map"

const LocationLayout = ({  }) => {
  return (
    <CardLayout>
      <br />
      <StyledSection>
        <div><BoldSpan>오시는 길</BoldSpan></div>
        <Map></Map>
      </StyledSection>
      <StyledSection>
        <div>버스</div>
      </StyledSection>
      <StyledSection>
        <div>지하철</div>
      </StyledSection>
      <StyledSection>
        <div>주차안내</div>
      </StyledSection>
    </CardLayout>
  );
}

export default LocationLayout;

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
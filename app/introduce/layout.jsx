'use client'

import Image from "next/image"
import styled from "styled-components"
import CardLayout from "../../src/components/CardLayout"

const IntroduceLayout = ({brideDad, brideMom, groomDad, groomMom, brideName, groomName, brideRank, groomRank, img}) => {
  return(
    <CardLayout>
      <AutoHeightImageWrapper>
      <Image src={img} width={400} height={525} className="autoImage" alt={'흑백'} priority={true} />
      </AutoHeightImageWrapper>
      <StyledSection>
        <div><BoldSpan>{groomDad}</BoldSpan> · <BoldSpan>{groomMom}</BoldSpan> 의 {groomRank}    <BoldSpan>{groomName}</BoldSpan></div>
        <div><BoldSpan>{brideDad}</BoldSpan> · <BoldSpan>{brideMom}</BoldSpan> 의 {brideRank }    <BoldSpan>{brideName}</BoldSpan> </div>
      </StyledSection>
    </CardLayout>
  )
}

export default IntroduceLayout;

const AutoHeightImageWrapper = styled.section`
`
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
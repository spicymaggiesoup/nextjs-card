'use client'

import Image from "next/image"
import styled from "styled-components"
import CardLayout from "../../src/components/CardLayout"
import { isoToTimeStamp } from "../../src/utils/convertDate"

const CoverLayout = ({ brideName, groomName, date, time, place, hallName, thumbNail }) => {
  return (
    <CardLayout>
      <AutoHeightImageWrapper>
        <Image src={thumbNail} priority={true} width={400} height={525} className="autoImage" alt={'thumbNail'}  placeholder="blur"  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" />
      </AutoHeightImageWrapper>
      <StyledSection>
        <br/>
        <div><BoldSpan>{groomName}</BoldSpan> | <BoldSpan>{brideName}</BoldSpan></div>
        <div>{date} {time}</div>
        <div>{place} {hallName}</div>
        <br/>
        <FlowerIcon />
        <br/>
        <div>어색했던 첫 만남을 또렷이 기억합니다.</div>
        <div>웃는 모습이 유난히 사랑스러웠던 신부</div>
        <div>그 모습을 유난히도 좋아했던 신랑</div>
        <br/>
        <div>이제는 언제나 함께 웃을 수 있는</div>
        <div>하나가 되려 합니다.</div>
        <br/>
        <div>그 시작이 소중한 분들과 함께라면</div>
        <div>저희에게 더없는 기쁨과 추억이 될 것입니다.</div>
        <br/>
        <div>귀한 걸음 하시어</div>
        <div>축복과 격려 주시면 감사하겠습니다.</div>
        <br/>
        {/* <StyledSection>
          <LeftSentence>
            <div>{isoToTimeStamp(date)}</div>
            <div>{time}</div>
            <div>{place}</div>
            <div>{hallName}</div>
          </LeftSentence>
          <RightBox>
            <div id='head'>우리, 결혼해요</div>
            <div>어제의 너와 내가</div>
            <div>오늘의 우리가 되어</div>
            <div>서로 닮아가고 있는</div>
            <div>신랑과 신부가 결혼합니다.</div>
            <br />
            <div>서로의 사랑을 약속하는 자리에</div>
            <div>소중한 여러분들을</div>
            <div>모시고 싶습니다.</div> */}
          {/* </RightBox> 
        </StyledSection>*/}
      </StyledSection>
    </CardLayout>
  )
}

export default CoverLayout;

const FlowerIcon = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 auto;
  background-color: black;
  /* background: 'https://mcard.fromtoday.co.kr/mcard/1006/icon_flower_00.png?184388904da3cfbee6b14b14038744d7';
  background-size: cover; */
`;

const InfoWrapper = styled.div`
  margin: 0 10px;
`

const StyledSection = styled.section`
  margin : 10px 0;
  text-align:center;
  div{
    padding: 6px 0;
  }
`
const BoldSpan = styled.span`
  font-weight: bolder;
`

const LeftSentence = styled.section`
  font-weight: bolder;
  width:30%;
  padding: 6px 0;
  line-height: 22px;
  div{
    padding: 6px 0;
  }
`
const RightBox = styled.section`
    width:70%;
    padding: 6px 0;
    line-height: 27px;
    div{
    padding: 6px 0;
    font-weight: 500;
  }
  #head{
    font-size: 20px;
    font-weight: bolder;
  }
`

const AutoHeightImageWrapper = styled.section`
`
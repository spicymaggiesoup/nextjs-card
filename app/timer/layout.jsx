
'use client'

import { Calendar } from "react-calendar";
import Image from "next/image"
import styled from "styled-components"
import CardLayout from "../../src/components/CardLayout";
import 'react-calendar/dist/Calendar.css'
import { useEffect, useState } from "react";
import { diffDate, isoToTimeStamp } from "../../src/utils/convertDate";

const TimerLayout = ({ date, time, brideName, groomName, thumbNail }) => {
  const [hydrated, setHydrated] = useState(false)
  const Ddate = new Date(date)
  const [thayDay, setThatDay] = useState(0)
  const DATE = isoToTimeStamp(date)
  useEffect(()=>{
    setHydrated(true)
    setThatDay(diffDate(date))
  },[date])
  if(!hydrated){
    return null
  }
  return (
    <CardLayout>
      <AutoHeightImageWrapper>
        <Image src={thumbNail} priority={true} width={400} height={525} className="autoImage" alt={'thumbNail'}  placeholder="blur"  blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==" />
      </AutoHeightImageWrapper>
      <InfoWrapper>
        <InfoBox>Information</InfoBox>
        <LeftBox>일시</LeftBox>
        <ContentBox>
          <StyledSection>
            <CalendarContainer>
              <Calendar value={Ddate}
                calendarType="US"
                formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
                nextLabel={null}
                prevLabel={null}
                next2Label={null}
                prev2Label={null}
                showFixedNumberOfWeeks={true}
              />
            </CalendarContainer>
            <>
              <div>{DATE} {time}</div>
              <div>{groomName.slice(1)} ♥ {brideName.slice(1)} 결혼식이 {thayDay}일 남았습니다.</div>
              <br />
            </>
          </StyledSection>
        </ContentBox>
      </InfoWrapper>
    </CardLayout>
  )
}

export default TimerLayout;


const InfoWrapper = styled.div`
  margin: 0 10px;
`

const InfoBox = styled.div`
  padding-bottom: 6px;
  border-bottom: 1px solid black;
`
const ContentBox = styled.div`
  display:flex;
`
const LeftBox = styled.div`
  width:30%;
  font-weight: bold;
  padding: 6px 0;
  line-height: 22px;
`
const RightBox = styled.div`
  width:70%;
  padding: 6px 0;
  line-height: 27px;
  div{
    padding: 6px 0;
  }
  .modal{
    cursor: pointer;
    width:100%;
    color : var(--color-white);
    background-color:#524344;
    border-radius: 9px;
    padding: 6px;
    text-align:center;
  }
`
export const CalendarContainer = styled.div`
  background-color: var(--color-white);
  border-radius: 10px;
  .react-calendar{
    border: 1px solid  var(--color-white);
  }
  .react-calendar__navigation__label > span {
    font-size:  15px;
    font-weight: bold;
  }
  .react-calendar__month-view__weekdays {
    abbr {
      font-size:  15px;
      font-weight: bold;
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    font-weight: bold;
    text-align: center;
    border-radius: 1rem;
    
  }
  .react-calendar__tile--active {
    color: #fff;
    background-color: var(--color-coral);
  }
`
const StyledSection = styled.section`
  margin : 10px 0;
  text-align:center;
  div{
    padding: 6px 0;
  }
`
const AutoHeightImageWrapper = styled.section`
`
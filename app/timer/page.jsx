import React from "react";
import TimerLayout from "./layout";
import Bride from "../../public/193659185_03.jpg";

function Timer() {
  
  return (
    <TimerLayout
      date="2024/06/15"
      time="14:00"
      brideName="이소연"
      groomName="김도현"
      thumbNail={Bride}
    />
  );
}

export default Timer;

import React from "react";
import TimerLayout from "./layout";
import Bride from "../../public/193659185_03.jpg";

function Timer() {
  const timerData = require('/public/data/timer.json');
  return (
    <TimerLayout
      {...timerData}
      thumbNail={Bride}
    />
  );
}

export default Timer;

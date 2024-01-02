import React from "react";
import IntroduceLayout from "./layout";
import Groom from "../../public/193659185_02.jpg";

function Introduce() {
  
  return (
    
      <IntroduceLayout
        brideDad="이병현"
        brideMom="천호숙"
        groomDad="김동욱"
        groomMom="김로아"
        brideName="이소연"
        groomName="김도현"
        brideRank="차녀"
        groomRank="장남"
        img={Groom}
      />
    
  );
}

export default Introduce;

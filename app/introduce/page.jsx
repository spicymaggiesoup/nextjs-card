import React from "react";
import IntroduceLayout from "./layout";
import Groom from "../../public/images/193659185_02.jpg";

function Introduce() {
  const introduceData = require('/public/data/introduce.json');
  return (
      <IntroduceLayout
        {...introduceData}
        img={Groom}
      />
  );
}

export default Introduce;

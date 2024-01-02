import React from "react";
import CoverLayout from "./layout";
import Hug from "../../public/193659185_05.jpg";

function Cover() {
  
  return (
    
      <CoverLayout 
        date="2024/06/15"
        time="오후 2시"
        place="명동성당"
        hallName="파미에채플"
        thumbNail={Hug}
      />
    
  );
}

export default Cover;

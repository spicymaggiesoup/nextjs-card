import React from "react";
import CoverLayout from "./layout";

import Hug from "../../public/images/193659185_05.jpg";

function Cover() {
  const coverData = require('/public/data/cover.json');
  return (
      <CoverLayout 
        {...coverData}
        thumbNail={Hug}
      />
    
  );
}

export default Cover;

import React from "react";
import LocationLayout from "./layout";

function Location() {
  const locationData = require('/public/data/location.json');
  return (
    <LocationLayout 
      {...locationData}
    />
  );
}

export default Location;

import React from "react";
import Sightstaff from "./Sightstaff";
import "./Sight.css";
import Sightmiddle from "./Sightmiddle";
function Sight() {
  return (
    <div className="sights">
      <div className="sightsBack">
        <Sightmiddle/>
      </div>
    </div>
  );
}

export default Sight;

import React from "react";
import Sightstaff from "./Sightstaff";
import "./Sight.css";
function Sight() {
  return (
    <div className="sights">
      <div className="sightsBack">
        <div className="sightsHeading">
          <p>Our insights & creative ideas</p>
          <Sightstaff />
        </div>
      </div>
    </div>
  );
}

export default Sight;

import React from "react";
import Fourthcontainer from "./fourthcontainer";
import "../fourthcontainer/subfour.css";
import Image1 from "../image/lighting.png";
import Image2 from "../image/light-bulb.png";
import Image3 from "../image/cyber.png";
function Subfour() {
    return (
        <div className="subfour">
        <Fourthcontainer image={Image1} name="Information Technology Consultancy" />
      <Fourthcontainer image={Image2} name="Product Design Strategy" />
      <Fourthcontainer image={Image3} name="Cyber Security & Web Development" />
                </div>
        )
}
export default Subfour;
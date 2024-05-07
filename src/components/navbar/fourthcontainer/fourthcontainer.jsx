import React from "react";
import "./fourthcontainer.css";
function Fourthcontainer(props) {
    const {image,name } = props;
    return (
        <div className="component">
            <div className="box">
                <div class="line-1 line"></div>
                <div class="line-2 line"></div>
                <img src={image} alt="" />
                    <p className="field">{name}</p>
                    </div>
                </div>
        )
}
export default Fourthcontainer;
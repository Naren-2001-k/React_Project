import React from "react";
import "./Sightstaff.css"
import bgimg1 from "../image/testimony-1.jpg";
import bgimg2 from "../image/testimony-2.jpg";
import bgimg3 from "../image/testimony-3.jpg";
import bgimg4 from "../image/testimony-4.jpg";
import bgimg5 from "../image/testimony-5.jpg";
function Sightstaff() {
  const data = [
    {
      bgimg: bgimg1,
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      staffname: "Roger Scott",
      roll: "INTERFACE DESIGNER",
    },
    {
      bgimg: bgimg2,
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      staffname: "Roger Scott",
      roll: "UI DESIGNER",
    },
    {
      bgimg: bgimg3,
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      staffname: "Roger Scott",
      roll: "WEB DEVELOPER",
    },
    {
      bgimg: bgimg4,
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      staffname: "Roger Scott",
      roll: "SYSTEM ANALYST",
    },
    {
      bgimg: bgimg5,
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
      staffname: "Roger Scott",
      roll: "MARKETING MANAGER",
    },
  ];
  return (
    <div className="Sightstaff">
      {data.map((value, index) => {
        return (
          <>
            <div key={index}>
              <div
                key={index}
                style={{ backgroundImage: `url(${value.bgimg})` }}
                className="staffBackground"
              >
              <div className="staffinfo">
                <p className="content">{value.content}</p>
              </div>
              </div>
            </div>
            ;
          </>
        );
      })}
    </div>
  );
}

export default Sightstaff;

import React from "react";
import "../Consulting_card/Sub_Consulting_card.css";
import CountUp from "react-countup";
function Sub_Consulting_card() {
  return (
    <div className="subConsulting_card">
      <div className="consult_people"></div>
      <div className="consult_numbers">
        <h2>
          Consult us here in <span>ITSolution</span>
        </h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <div className="Data_container">
          <div className="Data">
            <p className="numbers">
              <CountUp start={0} end={750} duration={10} />
            </p>
            <p className="content">Project Complete</p>
          </div>
          <div className="Data">
            <p className="numbers">
              <CountUp start={0} end={568} duration={10} />
            </p>
            <p className="content">Happy Clients</p>
          </div>
          <div className="Data">
            <p className="numbers">
              <CountUp start={0} end={478} duration={10} />
            </p>
            <p className="content">Business Partners</p>
          </div>
          <div className="Data">
            <p className="numbers">
              <CountUp start={0} end={780} duration={10} />
            </p>
            <p className="content">IT Consultant</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sub_Consulting_card;

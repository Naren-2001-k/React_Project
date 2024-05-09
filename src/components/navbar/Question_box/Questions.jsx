import React, { useState } from 'react';
import "./Question.css"
function Questions(props) {
    const { Questions, Answers } = props;
    const [color, setColor] = useState("black"); // State for managing color

  const handleChange = () => {
    setColor("#323EDD"); // Change color to red
  };
  return (
    <div className="Questions">
              <h1>Frequently Asks Questions</h1>
              <div className="button" onClick={handleChange} >
              <button style={{ color: color }}>{Questions}</button>
          </div>
          <div className="Answers">
              <ol>
          {Answers.map((answer, index) => (
            <li key={index}>&nbsp;&nbsp;&nbsp;{answer}</li>
          ))}
        </ol>
          </div>
          </div>
  )
}

export default Questions
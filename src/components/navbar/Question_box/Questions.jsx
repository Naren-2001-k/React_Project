import React, { useState } from "react";
import "./Question.css"; // Assuming you have a CSS file named Question.css
import data from "./question.json";
import Image1 from "../image/about.jpg";
import Image2 from "../image/bg_1.jpg";
import Image3 from "../image/work-2.jpg";
// import { Card } from "../Cards/Card";
function Questions(props) {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleQuestionClick = (e, index) => {
    e.preventDefault();
    setSelectedQuestion(index);
  };

  return (
    <>
      <div className="Questions">
        <div className="question_box">
          <h1>Frequently Asked Questions</h1>
          {data &&
            data.map((question, parentIndex) => {
              return (
                <>
                  <div
                    className="button"
                    key={parentIndex}
                    onClick={(e) => handleQuestionClick(e, parentIndex)}
                  >
                    {question.question}
                  </div>
                  <ol
                    className={`Answers ${
                      parentIndex == selectedQuestion ? "block " : "hidden"
                    }`}
                  >
                    {question.answers.map((answer, index) => {
                      return <li key={index}>={`${answer}`}</li>;
                    })}
                  </ol>
                </>
              );
            })}
        </div>
      </div>
      <div className="Images">
        <div className="Images1">
          <img className="first_image" src={Image1} alt="" />
        </div>
        <div className="Images2">
          <img className="second_image" src={Image2} alt="" />
          <img className="third_image" src={Image3} alt="" />
        </div>
      </div>
    </>
  );
}

export default Questions;

import React, { useState } from 'react';
import "./Question.css"; // Assuming you have a CSS file named Question.css
import data from "./question.json";

function Questions(props) {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const handleQuestionClick = (e, index) => {
    e.preventDefault();
    setSelectedQuestion(index);
  };

 

  return (
    <>
      <div className="Questions">
        <h1>Frequently Asked Questions</h1>
        {data && data.map((question, parentIndex) => {
          return (
            <>
            <div className='button' key={parentIndex} onClick={(e)=> handleQuestionClick(e,parentIndex)}>
              {question.question}
            </div>
            <ol className={`Answers ${parentIndex == selectedQuestion ? "block " : "hidden"}`}>
                {question.answers.map((answer, index) => {
                  return (
                      <li  key={index}>{`${answer}`}</li>

                )
              })}
              </ol>
              </>
          );
        })}
        {/* <div className="Answers">
          {selectedQuestion !== null && (
            <ol>
              <li>{data[selectedQuestion].answers}</li>
              </ol>
        )}
      </div> */}
      </div>
      
    </>
  );
}

export default Questions;

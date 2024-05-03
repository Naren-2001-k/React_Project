import React from 'react';
import "./ITsection.css";
function ITsection(props) {
  const { image, heading, content } = props;
  return (
    <div className="ITsection_card">
      <div className='circle1'></div>
      <div className='circle2'></div>
      <img src={image} alt="" />
      <p className='heading'>{heading}</p>
      <p className='content'>{content}</p>
    </div>
  )
}
export default ITsection;
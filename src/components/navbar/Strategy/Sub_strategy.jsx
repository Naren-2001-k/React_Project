import React from 'react'
import "./Sub_strategy.css"
function Sub_strategy(props) {
    const { Zoom_image,Work_image, Work_title, Work_idea } = props;
  return (
      <div className='Strategy_services'>
          <img className='zoom' src={Zoom_image} alt="" />
          <img src={Work_image} alt="" />
          <p className='title'>{ Work_title}</p>
          <p className='idea'>{ Work_idea}</p>
    </div>
  )
}

export default Sub_strategy
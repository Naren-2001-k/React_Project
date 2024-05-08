import React from 'react'
import Work_image1 from "../image/work-1.jpg"
import Work_image2 from "../image/work-2.jpg"
import Work_image3 from "../image/work-3.jpg"
import Work_image4 from "../image/work-4.jpg"
import Zoom_image from "../image/zoom.png"
import Sub_strategy from './Sub_strategy'
import "./Strategy.css"

function Strategy() {
  return (
      <div className='Strategy_box'>
          <Sub_strategy Zoom_image={Zoom_image } Work_image={Work_image1} Work_title="Web Development" Work_idea="Best Solution for Information Technology"/>
          <Sub_strategy Zoom_image={Zoom_image } Work_image={Work_image2} Work_title="Web Application" Work_idea="Creative Idea Build Up &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"/>
          <Sub_strategy Zoom_image={Zoom_image } Work_image={Work_image3} Work_title="Web Development" Work_idea="Web Design Concept & Web Analysis"/>
          <Sub_strategy Zoom_image={Zoom_image } Work_image={Work_image4} Work_title="UI/UX Strategy" Work_idea="Strategy for Enduring Customer Relationships"/>
    </div>
  )
}

export default Strategy
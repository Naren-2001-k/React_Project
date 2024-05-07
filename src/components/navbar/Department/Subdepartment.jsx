import React from 'react'
import "./Subdepartment.css"
function Subdepartment(props) {
      const { picture, heading, para } = props;
  return (
    
      <div className="Departments">
          <div class="line-1 line"></div>
                <div class="line-2 line"></div>
              <img src={picture} alt="" />
              <h2>{heading}</h2>
              <p>{para}</p>
          </div>
    
  )

}

export default Subdepartment
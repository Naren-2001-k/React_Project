import React from 'react'
function ITsection(props) {
    const {image,heading,content } = props;
  return (
      <div className='ITSection'>
          <div className="ITcard">
              <img src={image} alt="" />
              <p className='heading'>{ heading}</p>
              <p className='content'>{ content}</p>
          </div>
    </div>
  )
}

export default ITsection;
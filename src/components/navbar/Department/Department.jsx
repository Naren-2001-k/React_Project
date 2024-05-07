import React from 'react';
import Subdepartment from './Subdepartment';
import "./Department.css"
import Image1 from "../image/web-programming.png";
import Image2 from "../image/stats.png";
import Image3 from "../image/secure.png";
import Image4 from "../image/presentation.png";
function Department() {
  return (
      <div className='Department_container'>
          <Subdepartment
        picture={Image1}
        heading="Web Development"
        para="203 Fake St. Mountain View, San Francisco, California, USA"
      />
      <Subdepartment
        picture={Image2}
        heading="Database Analysis"
        para="A small river named Duden flows by their place and supplies."
      />
      <Subdepartment
        picture={Image3}
        heading="Server Security"
        para="A small river named Duden flows by their place and supplies."
      />
      <Subdepartment
        picture={Image4}
        heading="UX/UI Strategy"
        para="A small river named Duden flows by their place and supplies."
      />
    </div>
  )
}

export default Department;
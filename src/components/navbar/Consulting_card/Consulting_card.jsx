import React from 'react'
import Sub_Consulting_card from './Sub_Consulting_card';
import "../Consulting_card/Consulting_card.css";
function Consulting_card() {
  return (
      <div className='consulting_card'>
          <Sub_Consulting_card numbers="750" content="Project Complete" />
          <Sub_Consulting_card numbers="568" content="Happy Clients" />
          <Sub_Consulting_card numbers="478" content="Business Partners" />
          <Sub_Consulting_card numbers="780" content="IT Consultant"/>
    </div>
  )
}

export default Consulting_card
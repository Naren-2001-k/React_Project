import React from 'react'
import '../Consulting_card/Sub_Consulting_card.css';
function Sub_Consulting_card(props) {
    const { numbers, content } = props;
    return (
        <div className='subConsulting_card'>
    <div className="consult_people">
              
          </div>
          <div className="consult_numbers">
              <h2>Consult us here in ITSolution</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
              <div className="numbers">
                    <p className='numbers'>{numbers}</p>
                    <p className='content'>{content}</p>
             </div>
            </div>
            </div>
    );
}

export default Sub_Consulting_card
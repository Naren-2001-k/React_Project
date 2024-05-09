import React from 'react'
import Questions from './Questions'
import "./Question_box.css"
import Plus from "../image/plus-symbol-button.png"
function Question_box() {
  return (
      <div className='Question_box'>
          <Questions Questions="How Can We Help Your Business" Answers={[
          "Far far away, behind the word mountains",
          "Consonantia, there live the blind texts",
          "When she reached the first hills of the Italic Mountains",
              "Bookmarksgrove, the headline of Alphabet Village",
          "Separated they live in Bookmarksgrove right"
        ]}
/>
    </div>
  )
}

export default Question_box
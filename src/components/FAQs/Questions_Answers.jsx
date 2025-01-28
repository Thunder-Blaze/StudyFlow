import React from 'react'
import './Questions_Answers.css'

const Questions_Answers = (props) => {
  return (
    <div>
      <div className="question">
        <h1>Q. </h1>
        <h2>{props.ques}</h2>
      </div>
      <div className="answer">
      <h1>A. </h1>
      <h2>{props.ans}</h2>
      </div>
    </div>
  )
}

export default Questions_Answers

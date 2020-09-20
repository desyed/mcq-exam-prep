import React from "react"
// import { Link } from "gatsby"
import Image from "../image"
import "./style.css"

const Question = () => {
  return (
    <div className="question_con">
      <div className="title">Question: 1</div>
      <div className="question">
        <Image alt="question" src="1.png" />
        <div>
          <button>Show Answer</button>
        </div>
      </div>
      <div className="answer">
        <Image alt="answer" src="a1.png" />
      </div>
    </div>
  )
}

export default Question

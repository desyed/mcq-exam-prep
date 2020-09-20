import React, { useState } from "react"
// import { Link } from "gatsby"
import Image from "../image"
import "./style.css"

const Question = ({ info }) => {
  const [show, makeShow] = useState(false)
  return (
    <div className="question_con">
      <div className="title">Question: {info.id}</div>
      <div className="question">
        <Image alt="question" src={info.question} />
        <div style={{ background: "#0000001f" }}>
          <button
            onClick={() => {
              makeShow(!show)
            }}
          >
            {show ? "Hide" : "Show"} Answer
          </button>
        </div>
      </div>
      <div className={show ? "answer open" : "answer"}>
        {show && <Image alt="answer" src={info.answer} />}
      </div>
    </div>
  )
}

export default Question

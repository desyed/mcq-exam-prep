import React, { useState } from "react"
// import { Link } from "gatsby"
import Image from "../image"
import "./style.css"

const Question = ({ info, setQ }) => {
  const [show, makeShow] = useState(false)
  const [mark, markit] = useState(false)
  return (
    <div className="question_con">
      <div className={!mark ? "title right" : "title wrong"}>
        Question: {info.qid}
      </div>
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
        <div className="mark">
          Mark Status
          <button
            style={{ background: "rgb(185 224 108)", marginLeft: 20 }}
            onClick={() => {
              setQ(1, info.qid)
              makeShow(!show)
            }}
          >
            ✔
          </button>{" "}
          |{" "}
          <button
            style={{ background: "rgb(251 142 101)" }}
            onClick={() => {
              markit(true)
              setQ(0, info.qid)
              makeShow(!show)
            }}
          >
            ✖
          </button>
        </div>
        {show && <Image alt="answer" src={info.answer} />}
      </div>
    </div>
  )
}

export default Question

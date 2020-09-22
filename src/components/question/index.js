import React, { useState } from "react"
// import { Link } from "gatsby"
import Image from "../image"
import "./style.css"

const Question = ({ info, setQ }) => {
  const [show, toggleShow] = useState(false)
  const [mark, markit] = useState(false)
  return (
    <div className="question_con">
      <div className={!mark ? "title right" : "title wrong"}>
        Question: {info.qid}
      </div>
      <div className="question">
        <Image alt="question" src={info.question} />
        <div
          onClick={() => {
            toggleShow(!show)
          }}
          style={{ background: "rgb(0 0 0 / 5%)", textAlign: "right" }}
        >
          {show && (
            <div className="mark">
              Mark Status
              <button
                style={{ background: "rgb(185 224 108)", marginLeft: 20 }}
                onClick={e => {
                  e.stopPropagation()
                  setQ(1, info.qid)
                }}
              >
                ✔
              </button>{" "}
              |{" "}
              <button
                style={{ background: "rgb(251 142 101)" }}
                onClick={e => {
                  e.stopPropagation()
                  markit(true)
                  setQ(0, info.qid)
                }}
              >
                ✖
              </button>
            </div>
          )}
          <button style={{ fontSize: 15, padding: "0 10px" }}>
            {show ? "Hide" : "Show"} Answer
          </button>
        </div>
      </div>
      <div
        onClick={() => {
          toggleShow(!show)
        }}
        className={show ? "answer open" : "answer"}
      >
        {show && <Image alt="answer" src={info.answer} />}
      </div>
    </div>
  )
}

export default Question

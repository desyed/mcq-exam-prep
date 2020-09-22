import React, { useEffect, useState } from "react"
import axios from "axios"
import _ from "lodash"
import "./exam.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
// import Image from "../components/image"
import Question from "../components/question"

const SecondPage = () => {
  const [questions2, setQuestions2] = useState([])
  const [questions, setQuestions] = useState([])
  const [right, setRight] = useState([])
  const [wrong, setWrong] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("http://192.168.0.109:3000/qna")
      if (res) {
        setQuestions(res.data)
        setQuestions2(res.data)
      } else setError("Oops! An error occurs.")
    }
    fetchData()
  }, [])
  // console.log(questions)

  const filter = key => {
    if (key === 1) {
      setQuestions(
        _.filter(questions2, function (o) {
          let x = false
          right.forEach(itm => {
            if (o.qid === itm) x = true
          })
          return x
        })
      )
    } else if (key === -1) {
      setQuestions(questions2)
    } else {
      setQuestions(
        _.filter(questions2, function (o) {
          let x = false
          wrong.forEach(itm => {
            if (o.qid === itm) x = true
          })
          return x
        })
      )
    }
  }
  const setQ = (key, id) => {
    if (key === 1) {
      setRight([...right, id])
    } else {
      setWrong([...wrong, id])
    }
  }

  return (
    <Layout>
      <SEO title="Exam page" />
      <Header
        total={questions ? questions.length : 0}
        right={right ? right.length : 0}
        wrong={wrong ? wrong.length : 0}
        filter={filter}
      />
      <div className="exam_con">
        {questions && questions.length > 0 ? (
          questions.map((q, i) => {
            return <Question key={i} info={q} setQ={setQ} />
          })
        ) : (
          <p style={{ textAlign: "center" }}>{error ? error : "loading..."}</p>
        )}
      </div>
    </Layout>
  )
}

export default SecondPage

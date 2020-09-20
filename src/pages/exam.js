import React, { useEffect, useState } from "react"
import axios from "axios"
import "./exam.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
// import Image from "../components/image"
import Question from "../components/question"

const SecondPage = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    async function fetchData() {
      return await axios.get("http://localhost:3000/qna")
    }

    fetchData()
    // axios.get("http://localhost:3000/qna").then(res => {
    //   if (res) {
    //     // setQuestions(res["data"])
    //   }
    console.log(fetchData())
    // })
  })
  return (
    <Layout>
      <SEO title="Exam page" />
      <Header
        score={{ current: 0, total: 1000 }}
        questions={{ current: 0, total: 166 }}
      />
      <div className="exam_con">
        <Question />
        {/* <div className="question_con">
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
      </div> */}
      </div>
    </Layout>
  )
}

export default SecondPage

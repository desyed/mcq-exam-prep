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
      let res = await axios.get("http://localhost:3000/qna")
      setQuestions(res.data)
      // console.log(res.data)
    }
    fetchData()
  }, [])
  // console.log(questions)
  return (
    <Layout>
      <SEO title="Exam page" />
      <Header
        score={{ current: 0, total: 1000 }}
        questions={{ current: 0, total: 166 }}
      />
      <div className="exam_con">
        {questions &&
          questions.length &&
          questions.map(q => {
            return <Question info={q} />
          })}
      </div>
    </Layout>
  )
}

export default SecondPage

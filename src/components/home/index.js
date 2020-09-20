import React from "react"
import { Link } from "gatsby"
// import Image from "../image"
import "./style.css"

const Home = () => {
  return (
    <div className="home_con">
      <h1>MCQ EXAM PREPARATION</h1>
      <div className="infobox">
        <p>INSTRUCTOR: Shamsul Haque Md. Sohel</p>
      </div>
      <button>
        <Link to="/exam/">START EXAM</Link>
      </button>
      {/* <Image alt="sf" filename="a1.png" /> */}
    </div>
  )
}

export default Home

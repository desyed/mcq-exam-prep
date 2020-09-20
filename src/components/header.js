// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ score, questions }) => (
  <div
    style={{
      display: "flex",
      position: "fixed",
      textAlign: "center",
      fontSize: "14px",
      top: 0,
      left: 0,
      width: "100%",
      borderBottom: "1px solid",
      color: "#9a9ad8",
      paddingBbottom: 2,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
      background: "#fff",
      zIndex: 2,
    }}
  >
    <p style={{ margin: 0, flex: 1 }}>MCQ EXAM: CHECK YOURSELF</p>
    {/* <p style={{ margin: 0, padding: "0 5px", color: "cadetblue" }}>
      QUESTIONS: {questions["current"]}/{questions["total"]}
    </p>
    <p style={{ margin: 0, padding: "0 5px", color: "#71424b" }}>
      {"SCORE: " + score["current"] + "/" + score["total"]}
    </p> */}
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

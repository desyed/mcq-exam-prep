// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ score, total, right, wrong, filter }) => (
  <div
    style={{
      display: "flex",
      position: "fixed",
      textAlign: "center",
      fontSize: "14px",
      top: 0,
      left: 0,
      width: "100%",
      boxShadow: "0 0 17px 0px #0000002e",
      color: "#9a9ad8",
      paddingBbottom: 2,
      fontFamily:
        "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
      background: "#fff",
      zIndex: 2,
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
      }}
    >
      <p style={{ margin: 0, flex: 1 }}>MCQ EXAM: CHECK YOURSELF</p>
      <p style={{ margin: 0, padding: "0 5px", color: "cadetblue" }}>
        TOTAL: {total}
      </p>
      <p style={{ margin: 0, padding: "0 5px", color: "#b9b9b9" }}>
        SCORE:{" "}
        <button
          style={{ color: "rgb(145 202 33)", background: "transparent" }}
          onClick={() => {
            filter(1)
          }}
        >
          ✔ {right}
        </button>{" "}
        |{" "}
        <button
          style={{ color: "rgb(251 142 101)", background: "transparent" }}
          onClick={() => {
            filter(0)
          }}
        >
          ✖ {wrong}
        </button>
        |{" "}
        <button
          style={{ color: "rgb(251 142 101)", background: "transparent" }}
          onClick={() => {
            filter(-1)
          }}
        >
          ⊶
        </button>
      </p>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

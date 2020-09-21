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
      left: "50%",
      width: "100%",
      maxWidth: "1200px",
      transform: "translateX(-50%)",
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
    <p style={{ margin: 0, padding: "0 5px", color: "cadetblue" }}>
      TOTAL: {total}
    </p>
    <p style={{ margin: 0, padding: "0 5px", color: "#71424b" }}>
      SCORE:{" "}
      <button
        style={{ background: "rgb(185 224 108)" }}
        onClick={() => {
          filter(1)
        }}
      >
        ✔ {right}
      </button>{" "}
      |{" "}
      <button
        style={{ background: "rgb(251 142 101)" }}
        onClick={() => {
          filter(1)
        }}
      >
        ✖ {wrong}
      </button>
    </p>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

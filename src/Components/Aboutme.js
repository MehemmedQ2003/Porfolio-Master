import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          marginLeft: "auto",
          color: "#1da1f2",
          marginRight: "auto",
          marginTop: "100px",
          width: "60%",
          background: "white",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            textTransform: "uppercase",
            fontFamily: "Anton, sans-serif",
          }}
        >
          Muhammed Gardashov
        </h1>
        <p
          style={{
            textAlign: "justify",
            fontFamily: "Oxygen, sans-serif",
            fontSize: "30px",
            lineHeight: "2",
          }}
        >
          I have experience since June 2023 in Frontend Developer. I know HTML5 | CSS3 | BOOTSTRAP4 | SASS(SCSS) | JAVASCRIPT | JQUERY | REACT.JS | REDUX | Material UI | Php(Entry Level)
        </p>
      </div>
    );
  }
}

export default Aboutme;

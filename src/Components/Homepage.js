import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Homepage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto"}}>
        <Grid className="homepage-grid">
          <Cell col={12}>
            <div className="profile-img-border">
              <img
                className="profile-img"
                style={{height:"250px" ,background: "url(images/profileImage.jpg) center / contain no-repeat", backgroundColor:"skyblue"}}
                alt=""
              />
            </div>
            <div className="banner-text">
              <h1>FRONTEND DEVELOPER</h1>
              <hr />
              <p>
                HTML5 | CSS3 | BOOTSTRAP4 | SASS(SCSS) | JAVASCRIPT | JQUERY | REACT.JS | REDUX | Material UI | Php
              </p>
              <div className="social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=100049465160692"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-facebook-official"
                  ></i>{" "}
                </a>
                <a
                  href="https://twitter.com/mehemmedq11"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-twitter-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                <a
                  href="https://github.com/MehemmedQ2003"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-github-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
                <a
                  href="https://www.linkedin.com/in/mehemmed-qardasov-6ba49a235/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  <i
                    className="fa fa-linkedin-square"
                    aria-hidden="true"
                  ></i>{" "}
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Homepage;

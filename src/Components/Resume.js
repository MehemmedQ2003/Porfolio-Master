import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">

          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                alt=""
                style={{ height: "300px", width: "300px",background: "url(images/profileImage.jpg) center / cover", marginTop:"30px"}}
              />
            </div>

            <h2 style={{ paddingTop: "1em"}}>Muhammed Gardashov</h2>
            <h4 style={{ color: "#66ff00", fontWeight: "bolder", fontSize: "30px" }}>Frontend Developer</h4>
            <hr style={{ borderTop: "2px solid black", width: "100%" }} />
            <p style={{ textAlign: "justify", fontWeight:"bolder" }}>
              Muhammed Gardashov. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid black", width: "100%" }} />
            <h5 style={{fontWeight:"bolder", fontSize:"30px" }}>Address</h5>
            <p style={{fontSize:"18px", color:"white"}}>Azerbaijan, Baku, Hovsan 99, turn 4, home 7</p>
            <h5 style={{fontWeight:"bolder", fontSize:"30px" }}>Phone</h5>
            <p style={{fontSize:"18px", color:"white"}}>(+994) 557135290</p>
            <h5 style={{fontWeight:"bolder", fontSize:"30px" }}>Email</h5>
            <p style={{fontSize:"18px", color:"white"}}>mehemmed.qardasov2003@gmail.com</p>
            <h5 style={{fontWeight:"bolder", fontSize:"30px" }}>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color:"#66ff00", fontSize:"20px" }}
              href="/Gardashov_Muhammed_CV.pdf"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8} style={{marginTop:"30px"}}>
            <h2>Certification</h2>
            <div style={{marginBottom:"40px" }}>
            <Experience
              startYear={"22 Mart 2022"}
              jobName={"C++"}
              companyName={"Cisco Networking Academy"}
            />
            <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color:"#66ff00", fontSize:"20px", textAlign:"center"}}
            href="/MahammadGardashov-CPA - Programmin-certificate.pdf"
            >
              CPA: Programming Essentials in C++
            </a>
            </div>

            
            <div style={{marginBottom:"40px" }}>
            <Experience
              startYear={"13 Mart 2022"}
              jobName={"Python"}
              companyName={"Cisco Networking Academy"}
            />
            <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color:"#66ff00", fontSize:"20px", textAlign:"right" }}
            href="/MahammadGardashov-PCAP - Programmi-certificate.pdf"
            >
              PCAP: Programming Essentials in Python
            </a>
            </div>

            
            <div style={{marginBottom:"40px" }}>
            <Experience
              startYear={"23 Oktyabr 2023"}
              jobName={"Frontend Languages"}
              companyName={"Software Village"}
            />
            <a
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color:"#66ff00", fontSize:"20px", textAlign:"right" }}
            href="/Məhəmməd Qardaşov F2 ing.pdf"
            >
              Front End Bootcamp with React in Software Village 
            </a>
            </div>



            <hr style={{ borderTop: "3px solid #1da1f2" }} />

            <h2>Experience</h2>
            <Experience
              startYear={"July 2022"}
              endYear={"September 2022"}
              jobName={"HelpDesk"}
              companyName={"Azerbaijan State Oil and Industry University"}
              jobDesc={
                [
                  "Almost 1000 computers were monitored in the University. In addition, many printers and internet networks were monitored.",
                ]
              }
            />
            <Experience
              startYear={"June 2023"}
              endYear={"January 2024"}
              jobName={"Frontend Developer"}
              companyName={"Software Village"}
              jobDesc={["I learned HTML5, CSS3, BOOTSTRAP4, SASS(SCSS), JAVASCRIPT, JQUERY, REACT.JS, REDUX, Material UI programs and developed real projects at Software Village."]}
            />

            <hr style={{ borderTop: "3px solid #1da1f2" }} />
            <h2>Education</h2>
            <Education
              startYear={2021}
              endYear={2025}
              schoolName={"Azerbaijan State Oil and Industry University"}
              degreeName={"Bachelor Degree"}
              specialty={"Industrial Engineering"}
            />
            <hr style={{ borderTop: "3px solid #1da1f2" }} />
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={95} />
            <Skills skill={"BOOTSTRAP"} progress={95} />
            <Skills skill={"SASS(SCSS)"} progress={95} />
            <Skills skill={"JAVASCRIPT"} progress={80} />
            <Skills skill={"REACT.JS"} progress={70} />
            <Skills skill={"REDUX.js"} progress={70} />
            <Skills skill={"MATERIAL UI"} progress={40} />
            <Skills skill={"PHP"} progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;

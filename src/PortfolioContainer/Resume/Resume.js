import SchoolIcon from "@mui/icons-material/School";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import TerminalIcon from "@mui/icons-material/Terminal";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import "./Resume.css";
import { useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export function Resume() {
  const [section, setSection] = useState("1");
  const [selection, setSelection] = useState("education");
  const styles = selection === 1 ? { color: "green" } : " ";

  const logos = [
    {
      logo: "html",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    },
    {
      logo: "css",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      logo: "js",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",
    },
    {
      logo: "react",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    },
    {
      logo: "mongodb",
      url: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
    },
    {
      logo: "node",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
    },
    {
      logo: "express",
      url: "https://www.w3jar.com/wp-content/uploads/2019/05/express-js-tutorial.png",
    },
    {
      logo: "aws",
      url: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/r4wsu8rl4jvpjydbhooy",
    },
    {
      logo: "bootstrap",
      url: "https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png",
    },
    {
      logo: "mui",
      url: "https://lh3.googleusercontent.com/WgTVt2TUmCDrJuhBVQi84ynGogOcDzzAwKrR4IUxObCoNd-VAVeRph3gQtlUEgYq2yj9OgwtsGw0ylIwigC66jHmy1I0oxJ3GbNaS1criuH6-ohZ39dnwLOdhAzYuqaR1OX5ln7n",
    },
    {
      logo: "heroku",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Heroku_logo.svg/2560px-Heroku_logo.svg.png",
    },
    {
      logo: "netlify",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Netlify_logo.svg/1280px-Netlify_logo.svg.png",
    },
  ];

  return (
    <div className="resume-container">
      <div className="aboutme-heading">
        <h1>MY RESUME</h1>
      </div>
      <div className="resume-body">
        <div className="resume-topics">
          <div className="topics">
            <p
              style={
                selection === "education"
                  ? {
                      backgroundColor: "black",
                      color: "white",
                      height: "40px",
                      borderRadius: "10px",
                      padding: "10px",
                    }
                  : { color: "black" }
              }
              onClick={() => {
                setSection("1");
                setSelection("education");
              }}
            >
              <SchoolIcon /> Education
            </p>

            <p
              style={
                selection === "work"
                  ? {
                      backgroundColor: "black",
                      color: "white",
                      height: "40px",
                      borderRadius: "10px",
                      padding: "10px",
                    }
                  : { color: "black" }
              }
              onClick={() => {
                setSection("2");
                setSelection("work");
              }}
            >
              <WorkHistoryIcon />
              Work History
            </p>

            <p
              style={
                selection === "skills"
                  ? {
                      backgroundColor: "black",
                      color: "white",
                      height: "40px",
                      borderRadius: "10px",
                      padding: "10px",
                    }
                  : { color: "black" }
              }
              onClick={() => {
                setSection("3");

                setSelection("skills");
              }}
            >
              <TerminalIcon />
              Programming Skills
            </p>

            <p
              style={
                selection === "certificate"
                  ? {
                      backgroundColor: "black",
                      color: "white",
                      height: "40px",
                      borderRadius: "10px",
                      padding: "10px",
                    }
                  : { color: "black" }
              }
              onClick={() => {
                setSection("4");
                setSelection("certificate");
              }}
            >
              <CardMembershipIcon />
              Certificates
            </p>
          </div>
        </div>

        <div className="resume-contents-div">
          {section === "1" ? (
            <div className="education">
              <div className="title"></div>
              <p className="heading">SSLC</p>
              <p>Corporation Girls Hr.Sec. School</p>
              <p>Year of Passing : 2009</p>
              <p>Aggregate : 94.6%</p>

              <p className="heading">HSC</p>
              <p>Corporation Girls Hr.Sec. School</p>
              <p>Year of Passing : 2011</p>
              <p>Aggregate : 83.8%</p>

              <p className="heading">B.E-(ECE)</p>
              <p>Karpagam University</p>
              <p>Year of Passing : 2015</p>
              <p>CGPA : 8.7</p>
            </div>
          ) : (
            ""
          )}

          {section === "2" ? (
            <div className="work">
              <p className="heading">Service Engineer</p>
              <p>Premier Evolvics Pvt Ltd, Coimbatore</p>
              <p>Jan 2016 - Feb 2018</p>
              <li>
                Performed in-depth electronic acceptance testing of completed
                hardware, including continuity and high potential isolation
                testing
              </li>
              <li>
                Troubleshoot electrical equipment problems such as
                electro-valves and sensors
              </li>
              <li>
                Inspected all machines and equipment related to Textile
                machineries and provided the necessary repairs
              </li>
              <li>
                Communicated with other team members to enhance process and
                performance
              </li>
              <li>Supervised a team of 9 Service Engineers</li>

              <p className="heading">Electronics Engineer</p>
              <p>UMS Technologies Pvt Ltd, Coimbatore</p>
              <p>Mar 2018 - Jul 2019</p>
              <li>
                Development of Electronic Ignition System for Radial Engines
              </li>
              <li>
                Developed Data logging using Python for Electronic Ignition
                System
              </li>
              <li>Developed Jigs for testing of Electronic Ignition System</li>
              <li>Developed Electric car</li>
              <li>Electronic Ignition System production</li>

              <p className="heading">Freelancer</p>
              <p>Jan 2020 - Dec 2021</p>
              <li>IOT based Home automation system</li>
              <li>
                NRF controlled Water level monitoring for domestic purpose
              </li>
            </div>
          ) : (
            ""
          )}

          {section === "3" ? (
            <div className="skills">
              {logos.map(({ logo, url }) => (
                <div className="logo">
                  <img src={url} alt={logo} />
                </div>
              ))}
            </div>
          ) : (
            ""
          )}

          {section === "4" ? (
            <div className="certificates">
              <p className="heading">Certificates</p>
              <p>Full stack Developer - GUVI IITM </p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

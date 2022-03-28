import React from "react";
import Typical from "react-typical";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Profile.css";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">Hello, I'M Madhubala A</span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text"></span>
            <p>
              <Typical
                loop={Infinity}
                steps={[
                  "Full Stack Developer 💻",
                  1500,
                  "MERN Stack developer 💻",
                  1500,
                ]}

                // wrapper="p"
              />
            </p>
          </div>
          <span className="profile-role-tagline">
            Knack of building applications with front and backend operations.
          </span>
          <br /> <br /> <br />
          <div className="profile-options">
            <a href="Resume.pdf" download="Madhubala resume.pdf">
              <Button variant="contained">Get Resume</Button>
              {/* <button className="btn"></button> */}
            </a>
          </div>
          <br />
          <br />
          <div className="colz-icon">
            <GitHubIcon
              sx={{ fontSize: "40px" }}
              variant="outlined"
              color="info"
              onClick={() => window.open(`https://github.com/Madhubala1993`)}
            />

            <LinkedInIcon
              sx={{ fontSize: "40px" }}
              variant="outlined"
              color="info"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/in/madhubala-sarankumar-07707379/`
                )
              }
            />
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

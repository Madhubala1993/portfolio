import React from "react";
import Typical from "react-typical";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100006455718591">
                <FacebookIcon variant="outlined" color="info" />
              </a>
              <a href="https://www.linkedin.com/in/madhubala-sarankumar-07707379/">
                <LinkedInIcon variant="outlined" color="info" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I'M <span className="highlighted-text">Madhubala A</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text"></span>
            <h2>
              <em>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer 💻",
                    1500,
                    "MERN Stack developer 😎",
                    1500,
                  ]}

                  // wrapper="p"
                />
              </em>
            </h2>
            <span className="profile-role-tagline">
              Knack of building applications with front and backend operations.
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">Hire me</button>
            <a href="resume.pdf" download="Madhubala resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>{" "}
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

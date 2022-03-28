import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Alert } from "@mui/material";

import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "AWS Polymer Search",
      img: "aws screenshot.png",
      description:
        "AWS Polymer Search is AWS repositories with detailed attributes by category, tags, stars, contributors, and more. Developed using MERN Stack",
      link: "https://github.com/Madhubala1993/polymer_search_client_Frontend",
      demo: "https://aws-polymerserach-by-madhu.netlify.app/",
    },
    {
      name: "ToDo List",
      img: "todolist.png",
      description:
        "ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to doIt is helpful in planning our daily schedules",
      link: "https://github.com/Madhubala1993/polymer_search_client_Frontend",
      demo: "https://aws-polymerserach-by-madhu.netlify.app/",
    },
    {
      name: "Equipment Rental Portal",
      img: "rentalportal.png",
      description:
        "This is a MERN Stack Web application where we can rent camera and its accesories for certain period of time",
      link: "https://github.com/Madhubala1993/-guvi-hackathon2-frontend",
      demo: "https://zealous-visvesvaraya-27b7f0.netlify.app/",
    },
    {
      name: "Password Reset Flow",
      img: "resetflow.png",
      description:
        "This app is a demonstartion of simple Signup , Login and forgot password, where we get OTP via email for resetting the password.",
      link: "https://github.com/Madhubala1993/password-reset-flow-server",
      demo: "https://password-reset-flow-bymadhu.netlify.app/",
    },
  ];
  const [alert, setAlert] = useState(false);
  const copyClipboard = (link) => {
    navigator.clipboard.writeText(link);
    setAlert(true);
    window.setTimeout(() => {
      setAlert(false);
    }, 1000);
  };
  return (
    <div className="projects-container">
      <div className="aboutme-heading">
        <h1>MY PROJECTS</h1>
      </div>
      <div className="projects-card">
        {projects.map(({ name, description, link, demo, img }) => (
          <Card variant="outlined" className="card-container">
            <img src={img} alt={name} className="project-img" />
            <CardContent sx={{ marginBottom: "auto" }}>
              <Typography
                gutterBottom
                component="div"
                sx={{
                  color: "rgb(77, 80, 100)",
                  fontFamily: "Roboto Slab",
                  fontSize: "15px",
                }}
              >
                {name}
              </Typography>

              <p>{description}</p>
            </CardContent>
            <CardActions className="actions" sx={{ marginBottom: "1px" }}>
              <Button
                variant="text"
                onClick={() => {
                  copyClipboard(` ${link}`);
                }}
              >
                Github Link
              </Button>

              <Button variant="text" onClick={() => window.open(`${demo}`)}>
                Live Demo
              </Button>
              {alert && (
                <div className="alertBox">
                  <Alert severity="success">Link Copied!</Alert>
                </div>
              )}
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}

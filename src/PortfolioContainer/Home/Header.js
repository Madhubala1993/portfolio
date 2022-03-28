import React from "react";
// import { Heading, Button, Para, Margin } from "./Styles";
import "./Header.css";
import AboutMe from "../AboutMe/AboutMe";
import Link from "react-scroll/modules/components/Link";
import { Button } from "@mui/material";

export default function Header() {
  return (
    <div className="header-container">
      <div className="name-container">
        <h1>MADHUBALA A</h1>
      </div>

      <nav className="options-container">
        <Link to="home" smooth={true}>
          <Button variant="text">Home</Button>
        </Link>
        <Link to="aboutMe" smooth={true}>
          <Button variant="text">About Me</Button>
        </Link>
        <Link to="resume" smooth={true}>
          <Button variant="text">Resume</Button>
        </Link>
        <Link to="projects" smooth={true}>
          <Button variant="text">Projects</Button>
        </Link>
        <Link to="contactMe" smooth={true}>
          <Button variant="text">Contact Me</Button>
        </Link>
      </nav>
    </div>
  );
}

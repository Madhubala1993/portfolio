import React from "react";
import { useRef } from "react";
import { Heading, Button, Para, Margin } from "./Styles";
import "./Header.css";
import AboutMe from "../AboutMe/AboutMe";

export default function Header() {
  let myRef = useRef();
  const gotoServices = () => {
    window.scrollTo({ behavior: "smooth", top: myRef.current.offsetTop });
  };
  return (
    <div className="header-container">
      <div className="name-container">
        <h1>MADHUBALA A</h1>
      </div>

      <div className="options-container">
        <h3>Home</h3>
        <h3 onClick={gotoServices}>About Me</h3>
        <h3>Resume</h3>
        <h3>Projects</h3>
        <h3>Contact Me</h3>
      </div>
    </div>
  );
}

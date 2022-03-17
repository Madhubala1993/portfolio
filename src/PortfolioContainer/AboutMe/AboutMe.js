import { Paper } from "@mui/material";
import React from "react";
import "./AboutMe.css";
export default function AboutMe() {
  return (
    <div className="aboutme-container">
      <div className="electronics-container">
        <p className="content-container">
          The change of shade in dark mode is done by applying a
          semi-transparent gradient to the background-image property. This can
          lead to confusion when overriding the styles of Paper, as setting just
          the background-color property will not affect the elevation-related
          shading. To ignore the shading and set the background color that is{" "}
        </p>
      </div>
      <div className="it-container">
        <p className="content-container">
          The change of shade in dark mode is done by applying a
          semi-transparent gradient to the background-image property. This can
          lead to confusion when overriding the styles of Paper, as setting just
          the background-color property will not affect the elevation-related
          shading. To ignore the shading and set the background color that is{" "}
        </p>
      </div>
    </div>
  );
}

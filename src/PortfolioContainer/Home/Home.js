import React from "react";
import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import "./Home.css";
import AboutMe from "../AboutMe/AboutMe";
import Header from "./Header";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

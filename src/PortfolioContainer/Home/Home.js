import React, { useEffect, useRef, useState } from "react";
import PageEnd from "./Footer/Footer";
import Profile from "./Profile/Profile";
import "./Home.css";
import Header from "./Header";
import AboutMe from "../AboutMe/AboutMe";
import { Resume } from "../Resume/Resume";
import Link from "react-scroll/modules/components/Link";
import { motion, useAnimation } from "framer-motion";
import Projects from "../Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";

export default function Home() {
  return (
    <div className="home-container">
      <section id="home" className="app-section">
        <div className="homePage">
          <LazyShow>
            <Header />
            <Profile />
          </LazyShow>
        </div>
      </section>
      <section id="aboutMe" className="app-section">
        <LazyShow>
          <AboutMe />
        </LazyShow>
      </section>
      <section id="resume" className="app-section">
        <LazyShow>
          <Resume />
        </LazyShow>
      </section>
      <section id="projects" className="app-section">
        <LazyShow>
          <Projects />
        </LazyShow>
      </section>
      <section id="contactMe" className="app-section">
        <LazyShow>
          <ContactMe />
          <Footer />
        </LazyShow>
      </section>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p> Designed and Developed by Madhubala</p>
    </div>
  );
}
const LazyShow = ({ children }) => {
  const controls = useAnimation();
  const rootRef = useRef();
  const onScreen = useOnScreen(rootRef);
  useEffect(() => {
    if (onScreen) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 3,
          ease: "easeOut",
        },
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      className="lazy-div"
      ref={rootRef}
      initial={{ opacity: 0, x: -10 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
}

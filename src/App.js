// import "./index.css";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Fragment } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import Home from "./PortfolioContainer/Home/Home";
import ScrollPage from "./ScrollPage";

export default function App() {
  const history = useHistory();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => history.push("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => history.push("/aboutme")}>
            About Me
          </Button>
          <Button color="inherit" onClick={() => history.push("/resume")}>
            Resume
          </Button>
          <Button color="inherit" onClick={() => history.push("/projects")}>
            Projects
          </Button>
          <Button color="inherit" onClick={() => history.push("/contactme")}>
            Contact Me
          </Button>
        </Toolbar>
      </AppBar>
      <section className="router-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/resume">Resume</Route>
          <Route path="/projects">Projects</Route>
          <Route path="/contactme">contactme</Route>
        </Switch>
      </section>
    </div>
  );
}

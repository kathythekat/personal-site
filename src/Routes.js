import { Route, Switch, Redirect } from "react-router";
import About from "./about-me/About";
import Home from "./Home";
import Projects from "./Projects";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;

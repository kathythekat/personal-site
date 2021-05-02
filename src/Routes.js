import { Route, Switch } from "react-router";
import About from "./About";
import Home from "./Home";
import Projects from "./Project";

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
    </Switch>
  );
}

export default Routes;

import { Route, Switch } from "react-router";
import About from "./About";
import Home from "./Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
    </Switch>
  );
}

export default Routes;

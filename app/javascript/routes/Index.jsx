import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Stats from "../components/Stats";

export default (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/stats" exact component={Stats} />
        </Switch>
      </Router>
);

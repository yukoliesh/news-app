import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import LatestNews from "./components/LatestNews";
import Home from "./components/Home";
import history from './history';

export default class Routes extends Component {
  render() {
      return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/LatestNews" component={LatestNews} />
            </Switch>
        </Router>
      )
  }
}
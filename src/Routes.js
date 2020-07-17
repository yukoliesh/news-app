import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import App from "./App";
import LatestNews from "./components/LatestNews";
import PopularNews from "./components/PopularNews";
import YourFavorite from "./components/YourFavorite";
import Bookmark from "./components/Bookmark";
import history from "./history";

export default class Routes extends Component {
  render() {
      return (
          <Router history={history}>
              <Switch>
                  <Route path="/" exact component={App} />
                  <Route path="/LatestNews" component={LatestNews} />
                  <Route path="/PopularNews" component={PopularNews} />
                  <Route path="/YourFavorite" component={YourFavorite} />
                  <Route path="/Bookmark" component={Bookmark} />
              </Switch>
          </Router>
      )
  }
}
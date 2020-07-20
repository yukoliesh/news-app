import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LatestNews from "./LatestNews";
import PopularNews from "./PopularNews";
import YourFavorite from "./YourFavorite";
import Bookmark from "./Bookmark";
import { NavCont, NavItem }  from '../stylesheet/stylesheet';



const NavMenu = (props) => {
  console.log("nav props", props);
  return (
    <Router>
      <NavCont>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/LatestNews">Latest News</Link>
        </NavItem>
        <NavItem>
          <Link to="/PopularNews">Popular News</Link>
        </NavItem>
        <NavItem>
          <Link to="/YourFavorite">Your Favorite</Link>
        </NavItem>
        <NavItem>
          <Link to="/Bookmark">Bookmark</Link>
        </NavItem>
      </NavCont>
      <Switch>
        <Route path="/LatestNews">
          <LatestNews />
        </Route>
        <Route path="/PopularNews">
          <PopularNews />
        </Route>
        <Route path="/YourFavorite">
          <YourFavorite />
        </Route>
        <Route path="/Bookmark">
          <Bookmark />
        </Route>
      </Switch>
    </Router>
  );
  }
  export default NavMenu;
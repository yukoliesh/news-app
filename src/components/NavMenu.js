import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LatestNews from "./LatestNews";
import PopularNews from "./PopularNews";
import YourFavorite from "./YourFavorite";
import Bookmark from "./Bookmark";
import { NavCont, NavItem, LinkStyle }  from '../stylesheet/stylesheet';


const NavMenu = (props) => {
  console.log("nav props", props);
  return (
    <Router>
      <NavCont>
        <NavItem>
          <LinkStyle to="/">Home</LinkStyle>
        </NavItem>
        <NavItem>
          <LinkStyle to="/LatestNews">Latest News</LinkStyle>
        </NavItem>
        <NavItem>
          <LinkStyle to="/PopularNews">Popular News</LinkStyle>
        </NavItem>
        <NavItem>
          <LinkStyle to="/YourFavorite">Your Favorite</LinkStyle>
        </NavItem>
        <NavItem>
          <LinkStyle to="/Bookmark">Bookmark</LinkStyle>
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
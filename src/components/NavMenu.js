import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavCont, NavItem, NavAction }  from '../stylesheet/stylesheet';



const NavMenu = (props) => {
  console.log("nav props", props);
  const onLatestNewsClick = (e) => {
    e.preventDefault();
    console.log("clicked!");
  }
  const onPopularNewsClick = (e) => {
    e.preventDefault();
    console.log("clicked!");
  }
  const onYourFavoriteClick = (e) => {
    e.preventDefault();
    console.log("clicked!");
  }
  const onBookmarkClick = (e) => {
    e.preventDefault();
    console.log("clicked!");
  }

  return (
    <NavCont>
      <NavItem>
        <NavAction to="/Latest-News" onClick={onLatestNewsClick}>Latest News</NavAction>
      </NavItem>
      <NavItem>
        <NavAction to="/Popular-News" onClick={onPopularNewsClick}>Popular News</NavAction>
      </NavItem>
      <NavItem>
        <NavAction to="/Your-Favorite" onClick={onYourFavoriteClick}>Your Favorite</NavAction>
      </NavItem>
      <NavItem>
        <NavAction to="/Bookmark" onClick={onBookmarkClick}>Bookmark</NavAction>
      </NavItem>
    </NavCont>
  );
}

export default withRouter(NavMenu);
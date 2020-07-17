import React from 'react';
import { NavCont, NavItem, NavAction }  from '../stylesheet/stylesheet';


const NavLink = (props) => {
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
        <NavAction onClick={onLatestNewsClick}>Latest News</NavAction>
      </NavItem>
      <NavItem>
        <NavAction onClick={onPopularNewsClick}>Popular News</NavAction>
      </NavItem>
      <NavItem>
        <NavAction onClick={onYourFavoriteClick}>Your Favorite</NavAction>
      </NavItem>
      <NavItem>
        <NavAction onClick={onBookmarkClick}>Bookmark</NavAction>
      </NavItem>
    </NavCont>
  );
}

export default NavLink;
import React from 'react';
// import { withRouter } from 'react-router-dom';
import { NavCont, NavItem, NavAction }  from '../stylesheet/stylesheet';



const NavMenu = (props) => {
  console.log("nav props", props);
  return (
    <NavCont>
      <NavItem>
        <NavAction to="/Latest-News">Latest News</NavAction>
      </NavItem>
      <NavItem>
        <NavAction to="/Popular-News">Popular News</NavAction>
      </NavItem>
      <NavItem>
        <NavAction to="/Your-Favorite">Your Favorite</NavAction>
      </NavItem>
      <NavItem>
        <NavAction to="/Bookmark">Bookmark</NavAction>
      </NavItem>
    </NavCont>
  );
}

export default NavMenu;
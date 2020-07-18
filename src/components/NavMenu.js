import React from 'react';
import { NavCont, NavItem }  from '../stylesheet/stylesheet';
import { withRouter, Link } from 'react-router-dom';


const NavMenu = (props) => {
  console.log("nav props", props);
  return (
    <NavCont>
      <NavItem>
        <Link href="">Latest News</Link>
      </NavItem>
      <NavItem>
        <Link href="/PopularNews">Popular News</Link>
      </NavItem>
      <NavItem>
        <Link href="/YourFavorite">Your Favorite</Link>
      </NavItem>
      <NavItem>
        <Link href="Bookmark">Bookmark</Link>
      </NavItem>
    </NavCont>
  );
}

export default withRouter(NavMenu);
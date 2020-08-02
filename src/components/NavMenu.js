import React from 'react';
import { NavCont, NavItem, LinkStyle }  from '../styles/style';


const NavMenu = (props) => {
  return (
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
          <LinkStyle to="/ReadLater">Read Later</LinkStyle>
        </NavItem>
      </NavCont>
  );
  }
  export default NavMenu;
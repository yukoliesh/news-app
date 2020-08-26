import React from 'react';
import { NavCont, NavItem, LinkStyle }  from '../styles/style';


const NavMenu = (props) => {
  return (
      <NavCont>
        <NavItem>
          <LinkStyle to="/" data-testid="home-header-nav">Home</LinkStyle>
        </NavItem>
        <NavItem>
          <LinkStyle to="/LatestNews" data-testid="latest-header-nav">Latest News</LinkStyle>
        </NavItem>
        <NavItem>
          <LinkStyle to="/PopularNews" data-testid="popular-header-nav">Popular News</LinkStyle>
        </NavItem>
        <NavItem>
          <LinkStyle to="/YourFavorite" data-testid="favorite-header-nav">Your Favorite</LinkStyle>
        </NavItem>
        <NavItem>
          <LinkStyle to="/ReadLater" data-testid="readlater-header-nav">Read Later</LinkStyle>
        </NavItem>
      </NavCont>
  );
  }
  export default NavMenu;
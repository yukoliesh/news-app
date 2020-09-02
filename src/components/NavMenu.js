import React from 'react';
import { isMobileOnly } from "react-device-detect";
import { NavCont, NavItem, LinkStyle }  from '../styles/style';

const NavMenu = (props) => {
  return (
    <React.Fragment>
      {!isMobileOnly && (
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
      )}
    </React.Fragment>
  )
  }
  export default NavMenu;
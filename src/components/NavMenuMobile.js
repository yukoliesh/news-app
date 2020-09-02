import React from 'react';
// import { isMobileOnly } from "react-device-detect";
import { NavButton, NavCont, NavItem, LinkStyle, NavModal, HeadlinerColBoxMobileNav }  from '../styles/style';

export const NavMenuMobile = (props) => {
  return (
    <React.Fragment>
      <NavModal>
        <HeadlinerColBoxMobileNav>
          <NavButton onClick={props.handleClickOpen}>
            <i class="fas fa-times"></i>
          </NavButton>
        </HeadlinerColBoxMobileNav>
        <NavCont>
          <NavItem>
            <LinkStyle to="/" data-testid="home-header-nav" onClick={props.handleClickOpen}>Home</LinkStyle>
          </NavItem>
          <NavItem>
            <LinkStyle to="/LatestNews" data-testid="latest-header-nav" onClick={props.handleClickOpen}>Latest News</LinkStyle>
          </NavItem>
          <NavItem>
            <LinkStyle to="/PopularNews" data-testid="popular-header-nav" onClick={props.handleClickOpen}>Popular News</LinkStyle>
          </NavItem>
          <NavItem>
            <LinkStyle to="/YourFavorite" data-testid="favorite-header-nav" onClick={props.handleClickOpen}>Your Favorite</LinkStyle>
          </NavItem>
          <NavItem>
            <LinkStyle to="/ReadLater" data-testid="readlater-header-nav" onClick={props.handleClickOpen}>Read Later</LinkStyle>
          </NavItem>
        </NavCont>
      </NavModal>
    </React.Fragment>
  );
}
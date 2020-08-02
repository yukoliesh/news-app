import styled, { css } from '@xstyled/styled-components';
import { system } from '@xstyled/system'
import { Link } from 'react-router-dom';
import { pageHeaderFontStyle, fontFamily } from "./font-style"
import {  lm_purple, lm_white, lm_favorite, grey } from "./color"
import {bg, displayflex} from "./layout";

// App component
export const Background = styled.div`
  ${displayflex}
  ${bg}
`;

export const ContentWrapper = styled.div`
  ${fontFamily}
  background-color: ${({ theme }) => theme.wrapperBg};
  border-radius: 1.5em 1.5em 0 0;
  width: 70vw;
  min-height: 40vh;
  padding-bottom: 3em;
`;

export const HeaderWrapper = styled.div`
  ${displayflex}
  background: ${({ theme }) => theme.headerBg};
  background: ${({ theme }) => theme.headerGradient};
  border-radius: 1.5em 1.5em 0 0;
  padding: 4em 5em;
  height: 350px;
`;
export const HeaderCont = styled.div`
  width: 700px;
`;
export const Header = styled.h1`
  font-size: 3em;
  font-style: italic;
  font-weight: 600;
  text-align: center;
`;
export const HeaderTodayText = styled.span`
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px white;
`;
export const HeadingLinkStyle = styled(Link)`
  color: ${lm_white};
  text-decoration: none; 
  &:hover{
    color: ${lm_white}
  }
`;
export const BorderLine = styled.div`
  border-bottom: solid 1px ${lm_white};
`;

export const MainWrapper = styled.div`
  ${displayflex}
  padding: 2em 4em; 
`;

// Navlink Component
export const NavCont = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;
export const NavItem = styled.li`
  line-height: 1.5;
`;

export const NavAction = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1em;
  &:hover{
    color: ${lm_purple}
  }
`;

// Box
export const Box = styled.div`
  ${system}
`;
export const HeadlinerColBox = styled(Box)`
  width: 100%;

`;

export const HeadlinerColCont = styled(Box)`
  background-color:  ${({ theme }) => theme.headlinerBg};
  box-shadow:  ${({ theme }) => theme.boxShadow};
  padding: 1em 2em 2em;
  border-radius: 1.5em;
  width: 40%;
`;

export const NewsTitleEllipsisBox = styled(Box)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

// Switch
export const CenterBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightAlingedBox = styled(Box)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LightModeSwitchLabel = styled.span`
  color: ${lm_white};
`;
// Front HeadLiner
export const LatestHeader = styled.h2`
  ${pageHeaderFontStyle}
  color: ${({ theme }) => theme.latestColor};
`;

export const PopularHeader = styled.h2`
  ${pageHeaderFontStyle}
  color: ${({ theme }) => theme.popularColor};
`;

const MoreButtonStyle = css`
  width: 80%;
  border-radius: 2.5em;
  padding: 1.5em 2em;
  font-size: 1em;
  text-align: center;
  text-decoration: none;
`;

export const MoreLatestButton = styled(Link)`
  ${MoreButtonStyle}
  background-color: ${({ theme }) => theme.latestColor};
  color: ${lm_white};
`;
export const MorePopularButton = styled(Link)`
  ${MoreButtonStyle}
  background-color: ${({ theme }) => theme.popularColor};
  color: ${lm_white};
`;


// Link Style
export const HyperLinkStyle = styled.a`
  color: ${({ theme }) => theme.titleLink};
  font-weight: 600;
  text-decoration: none; 
  &:hover{
    color: ${({ theme }) => theme.titleLinkHover};
  }
`;

export const LinkStyle = styled(Link)`
  color: ${lm_white};
  font-weight: 400;
  text-decoration: none; 
  &:hover{
    color: ${grey}
  }
`;

// Your Favorite icon
export const HeartIcon = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.heartIcon};
 }
`;
// Read Later icon
export const ReadLaterIcon = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  outline: none;
  color: ${({ theme }) => theme.bookmarkIcon};
`;

// Your Favorite page
export const FavoriteHeader = styled.h2`
  ${pageHeaderFontStyle}
  color: ${lm_favorite};
`;

export const SavedItems = styled.ol`
  margin-left: 0;
  padding-left: 0;
  list-style-type: decimal-leading-zero;
`;
export const SavedItem = styled.li`
  list-style: none;
  line-height: 1.5
`;
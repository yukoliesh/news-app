import styled, { css } from '@xstyled/styled-components';
import { system } from '@xstyled/system'
import { Link } from 'react-router-dom';

// Common CSS
export const displayflex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

// Common Colors
const lightMode_bg_lightblue = "#C0E7FE";
const lightMode_purple = "#5B17B1";
const lightMode_latestBlue = "#313EB0";
const lightMode_popularGreen = "#27793E";
const lightMode_white = "#fff;"
const grey = "#333";

// Font Weight
// const light = "300";
const heavy = "600";

// Font Style

// Loading / Spinner

export const LoadingStyle = styled.div`
  margin: 0;
  background-color: rgba(76, 43, 250, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;


  .lds-ellipsis {
  margin: auto;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.8);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
`;

// App component
export const LightModeBg = styled.div`
  ${displayflex}
  background-color: ${lightMode_bg_lightblue};
  height: 60vh;
  padding-top: 2em;
`;

export const LightModeContentWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-color: ${lightMode_white};
  border-radius: 1.5em 1.5em 0 0;
  width: 70vw;
  min-height: 40vh;
  padding-bottom: 3em;
`;

export const LightModeHeaderWrapper = styled.div`
  ${displayflex}
  background: rgb(65,0,250);
  background: linear-gradient(144deg, rgba(65,0,250,1) 0%, rgba(124,240,248,1) 100%);
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
  font-weight: ${heavy};
  text-align: center;
`;
export const HeaderTodayText = styled.span`
  color: transparent;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px white;
`;
export const HeadingLinkStyle = styled(Link)`
  color: ${lightMode_white};
  text-decoration: none; 
  &:hover{
    color: ${lightMode_white}
  }
`;
export const BorderLine = styled.div`
  border-bottom: solid 1px ${lightMode_white};
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
    color: ${lightMode_purple}
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
  background-color:  ${lightMode_white};
  -webkit-box-shadow: 0px 30px 30px 0px rgba(125,125,125,1);
  -moz-box-shadow: 0px 30px 30px 0px rgba(125,125,125,1);
  box-shadow: 0px 30px 30px 0px rgba(125,125,125,1);
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
  color: ${lightMode_white};
`;
// Front HeadLiner
export const LatestHeader = styled.h2`
  color: ${lightMode_latestBlue};
  font-size: 1.5em;
  font-style: italic;
  font-weight: 600;
`;

export const PopularHeader = styled.h2`
  color: ${lightMode_popularGreen};
  font-size: 1.5em;
  font-style: italic;
  font-weight: 600;
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
  background-color: ${lightMode_latestBlue};
  color: ${lightMode_white};
`;
export const MorePopularButton = styled(Link)`
  ${MoreButtonStyle}
  background-color: ${lightMode_popularGreen};
  color: ${lightMode_white};
`;


// Link Style
export const HyperLinkStyle = styled.a`
  color: ${lightMode_purple};
  font-weight: 600;
  text-decoration: none; 
  &:hover{
    color: ${grey}
  }
`;

export const LinkStyle = styled(Link)`
  color: ${lightMode_white};
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
 .ripple{
    background-position: center;
    transition: background 0.8s;
    &:hover{
      background: #ff0000 radial-gradient(circle, transparent 1%, #ff0000 1%) center/15000%;
    }
    &:hover{
      background-color: #6eb9f7;
      background-size: 100%;
      transition: background 0s;
    }
 }


`;


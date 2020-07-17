// import { Link } from 'react-router-dom';
import styled, { css } from '@xstyled/styled-components';
import { system } from '@xstyled/system'

// Common CSS
const displayflex = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

// Common Colors
const lightMode_purple = "#5B17B1";
const lightMode_blue = "#5ACDF1";
const lightMode_green = "#5AF17C";
const lightMode_white = "#fff;"

// Font Weight
const light = "300";

// Font Style

// App component
const ContentWrapper = styled.div`
  ${displayflex}
  min-height: 40vh;
  padding: 3em;
  font-family: 'Montserrat', sans-serif;
`;

const HeaderWrapper = styled.div`
  width: 50vw;
  padding: 2em;
`;
const Header = styled.h1`
  font-size: 3em;
  font-style: italic;
  font-weight: ${light};
  color: ${lightMode_purple};
  text-align: center;
  padding-bottom: 0.2em;
`;
const BorderLine = styled.div`
  border-bottom: solid 1px ${lightMode_purple};
`;

const MainWrapper = styled.div`
  ${displayflex}
  padding-top: 2em; 
`;

// Navlink Component
const NavCont = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
`;
const NavItem = styled.li`
  line-height: 1.5;
`;

const NavAction = styled.a`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 1em;
  &:hover{
    color: ${lightMode_purple}
  }
`;

// Box
const Box = styled.div`
  ${system}
`;
const HeadlinerColBox = styled(Box)`
  width: 100%;
`;

// Front HeadLiner
const LatestHeader = styled.h2`
  background-color: ${lightMode_blue};
  color: ${lightMode_white};
  padding: 0.5em 1em;
  border-radius: 0.5em;
  font-size: 1em;
`;

const PopularHeader = styled.h2`
  background-color: ${lightMode_green};
  color: ${lightMode_white};
  padding: 0.5em 1em;
  border-radius: 0.3em;
  font-size: 1em;
`;
const LatestWrapper = styled.div`
  margin: 0 auto;
`;

export{
  ContentWrapper,
  HeaderWrapper,
  Header,
  BorderLine,
  MainWrapper,
  NavCont,
  NavItem,
  NavAction,
  Box,
  HeadlinerColBox,
  LatestHeader,
  PopularHeader,
  LatestWrapper
}




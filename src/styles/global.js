import { createGlobalStyle } from '@xstyled/styled-components';
export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 0;
  margin: 0;
  transition: all 0.25s linear;
}
`;

export const lightTheme = {
  body: '#C0E7FE',
  text: '#363537',
  headerBg: 'rgb(65,0,250)',
  headerGradient: 'linear-gradient(144deg, rgba(65,0,250,1) 0%, rgba(124,240,248,1) 100%)',
  headerNavLink: "#fff",
  toggleBorder: '#fff',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  wrapperBg: 'rgb(255,255,255,0.9)',
  latestColor: '#313EB0',
  popularColor: '#27793E',
  moreBtnTxtColor: '#fff',
  headlinerBg: '#fff',
  titleLink: '#5B17B1',
  titleLinkHover: '#4100FA',
  icon: "#4d4d4d",
  boxShadow: '0px 30px 30px 0px rgba(125,125,125,1);'
}

export const darkTheme = {
  body: '#D7C0FE',
  text: '#FAFAFA',
  headerBg: 'rgb(20,13,242)',
  headerGradient: 'linear-gradient(155deg, rgba(20,13,242,1) 0%, rgba(160,16,228,1) 67%)',
  headerNavLink: "#fff",
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  wrapperBg: 'rgb(40,45,79,0.9)',
  latestColor: '#F89ABA',
  popularColor: '#FCC195',
  moreBtnTxtColor: '#444',
  readlaterColor: '#ff740d',
  headlinerBg: '#353D71',
  titleLink: '#fff',
  titleLinkHover: '#F89ABA',
  icon: "#fff"
}
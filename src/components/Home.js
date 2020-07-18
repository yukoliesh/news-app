import React from 'react';
// import history from '../history';
import NavMenu  from './NavMenu';
import { Link } from 'react-router-dom';
import { Header, BorderLine }  from '../stylesheet/stylesheet';

const Home = (props) => {
  return (
    <React.Fragment>
      <Header><Link href="#home">Today's Tech News</Link></Header>
      <BorderLine />
      <NavMenu />
    </React.Fragment>
  );
}

export default Home;
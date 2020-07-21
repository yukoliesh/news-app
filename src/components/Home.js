import React from 'react';
import FrontHeadliner from "./FrontHeadliner";
import { MainWrapper }  from '../stylesheet/stylesheet';

const Home = (props) => {
  return (
    <React.Fragment>
      <MainWrapper>
        <FrontHeadliner />
      </MainWrapper>
    </React.Fragment>
  );
}

export default Home;
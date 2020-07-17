import {
  BrowserRouter as Router
} from 'react-router-dom';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from './apollo/query';
import { ContentWrapper, HeaderWrapper, Header, BorderLine, MainWrapper}  from './stylesheet/stylesheet';
import NavMenu  from './components/NavMenu';
import Routes from "./Routes";
import FrontHeadliner from './components/FrontHeadliner';

// const Home = () => <h1>Home</h1>;
// const About = () => <h1>About</h1>;


const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });

  
  return (
    <Router>
      <ContentWrapper>
        <HeaderWrapper>
          <Header>Today's Tech News</Header>
          <BorderLine />
          <NavMenu />
          <Routes />
          <MainWrapper>
            <FrontHeadliner />
          </MainWrapper>
        </HeaderWrapper>
        
      </ContentWrapper>
    </Router>
  );
}

export default App;

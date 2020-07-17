import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from './apollo/query';
import { ContentWrapper, HeaderWrapper, MainWrapper}  from './stylesheet/stylesheet';
import Routes from "./Routes";
import Home  from './components/Home';
import NavMenu  from './components/NavMenu';
import FrontHeadliner from './components/FrontHeadliner';




const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Home />
        <NavMenu />
        <Routes />
        <MainWrapper>
          <FrontHeadliner />
        </MainWrapper>
      </HeaderWrapper>
      
    </ContentWrapper>
  );
}

export default App;

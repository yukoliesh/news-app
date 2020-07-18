import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from './apollo/query';
import { ContentWrapper, HeaderWrapper, MainWrapper}  from './stylesheet/stylesheet';
// import NavMenu  from './components/NavMenu';
import Routes from "./Routes";
import FrontHeadliner from './components/FrontHeadliner';



const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Routes />
        <MainWrapper>
          <FrontHeadliner />
        </MainWrapper>
      </HeaderWrapper>
      
    </ContentWrapper>
  );
}

export default App;

import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from './apollo/query';
import { ContentWrapper, HeaderWrapper, Header, BorderLine, MainWrapper}  from './stylesheet/stylesheet';
import NavLink  from './components/NavLink';
import FrontHeadliner from './components/FrontHeadliner';



const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Header>Today's Tech News</Header>
        <BorderLine />
        <NavLink />
        <MainWrapper>
          <FrontHeadliner />
        </MainWrapper>
      </HeaderWrapper>
      
    </ContentWrapper>
  );
}

export default App;

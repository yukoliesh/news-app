import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from './apollo/query';
import { ContentWrapper, HeaderWrapper, MainWrapper }  from './stylesheet/stylesheet';
import Home from "./components/Home";
import FrontHeadliner from './components/FrontHeadliner';
import Loading from "./Loading";

const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  const newData = data;
  console.log("hn", newData);
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Home />
        <MainWrapper>
          <FrontHeadliner />
        </MainWrapper>
      </HeaderWrapper>
    </ContentWrapper>
  );
}

export default App;

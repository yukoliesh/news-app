import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';
import { NEWS_QUERY } from './apollo/query';
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import { ContentWrapper, HeaderWrapper, Header, BorderLine }  from './stylesheet/stylesheet';


import Loading from "./Loading";

const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Header><Link to="/">Today's Tech News</Link></Header>
        <BorderLine />
        <NavMenu />
        <Home />
      </HeaderWrapper>
    </ContentWrapper>
  );
}

export default App;

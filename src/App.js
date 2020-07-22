import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
// import { Link } from 'react-router-dom';
import { NEWS_QUERY } from './apollo/query';
import Home from "./components/Home";
import NavMenu from "./components/NavMenu";
import Switch from "./components/Switch/Switch";
import { LightModeContentWrapper, LightModeHeaderWrapper, Header, BorderLine, HeadingLinkStyle, LightModeBg, HeaderTodayText, RightAlingedBox, HeaderCont }  from './stylesheet/stylesheet';


import Loading from "./Loading";

const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  const [value, setValue] = React.useState(false);
  console.log( { loading, error, data });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  
  return (
    <LightModeBg>
      <LightModeContentWrapper>
        <LightModeHeaderWrapper>
          <HeaderCont>
            <HeadingLinkStyle to="/">
              <Header><HeaderTodayText>Today's </HeaderTodayText>Tech News</Header>
            </HeadingLinkStyle>
            <BorderLine />
            <NavMenu />
            <RightAlingedBox>
              <Switch isOn={value} handleToggle={() => setValue(!value)} onColor="#4100FA" />
            </RightAlingedBox>
          </HeaderCont>
        </LightModeHeaderWrapper>
        <Home />
      </LightModeContentWrapper>
    </LightModeBg>
  );
}

export default App;

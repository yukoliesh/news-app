import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from './apollo/query';
import NavMenu from "./components/NavMenu";
import Loading from "./Loading";
import FrontHeadliner from "./components/FrontHeadliner";
import LatestNews from './components/LatestNews';
import PopularNews from './components/PopularNews';
import YourFavorite from './components/YourFavorite';
import Bookmark from './components/Bookmark';
import ModeToggle from "./components/ModeToggle/ModeToggle";
import { LightModeContentWrapper, LightModeHeaderWrapper, Header, BorderLine, HeadingLinkStyle, LightModeBg, HeaderTodayText, RightAlingedBox, HeaderCont, MainWrapper }  from './stylesheet/stylesheet';




const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  const [value, setValue] = React.useState(false);
  console.log( { loading, error, data });
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;

  
  return (
    <Router>
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
                <ModeToggle isOn={value} handleToggle={() => setValue(!value)} onColor="#4100FA" />
              </RightAlingedBox>
            </HeaderCont>
          </LightModeHeaderWrapper>
          <MainWrapper>
            <Switch>
              <Route exact path="/">
                <FrontHeadliner />
              </Route>
              <Route path="/LatestNews">
                <LatestNews  />
              </Route>
              <Route path="/PopularNews" component={PopularNews} /> 
              <Route path="/YourFavorite" component={YourFavorite} />
              <Route path="/Bookmark" component={Bookmark} />
            </Switch>
          </MainWrapper>
        </LightModeContentWrapper>
      </LightModeBg>

      
    </Router>
  );
}

export default App;

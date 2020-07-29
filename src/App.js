import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from './apollo/query';
import NavMenu from "./components/NavMenu";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import FrontHeadliner from "./components/FrontHeadliner";
import LatestNews from './components/LatestNews';
import PopularNews from './components/PopularNews';
import YourFavorite from './components/YourFavorite';
import ReadLater from './components/ReadLater';
import ModeToggle from "./components/ModeToggle/ModeToggle";
import { useLocalStorage } from './hooks/useLocalStorage';
import { LightModeContentWrapper, LightModeHeaderWrapper, Header, BorderLine, HeadingLinkStyle, LightModeBg, HeaderTodayText, RightAlingedBox, HeaderCont, MainWrapper, PopularHeader, LatestHeader }  from './stylesheet/stylesheet';

const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  const [value, setValue] = React.useState(false);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [readlaters, setReadLaters] = useLocalStorage('readlaters', []);

  console.log( { loading, error, data });
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <ErrorPage />;
  }
  if (!data) return <p>Not found</p>;

  // Getting the stories
  const popularStories = data.hn.topStories;
  const newStories = data.hn.newStories;

  // Format Date and time
  const formatDate = (timeISO) => {
    const date = timeISO.split("T")[0];
    const timeSplit = timeISO.split("."[0]);
    const time = timeSplit[0].split("T")[1];
    // return `${timeISO.split("T")[0]} ${timeISO.split(".")[0]}` 
    return date + " " + time;
  }

  // Adding postId to localStorage
  const addFavorite = (postId) => {
    console.log("add fav", favorites);
    setFavorites([...favorites, postId]);
  }

  const addReadLaters = (postId) => {
    setReadLaters([...readlaters, postId])
  }
  
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
                <LatestHeader>Latest News</LatestHeader>
                {newStories && newStories.map(item => 
                <LatestNews 
                popularId={item.id}
                popularNewsTitle={item.title}
                popularTime={formatDate(item.timeISO)}
                popularUrl={item.url} 
                key={item.id} 
                onFavoriteClick={() => addFavorite(item.id)} 
                onBookmarkClick={() => addReadLaters(item.id)}  /> 
                )}
              </Route>
              <Route path="/PopularNews">
              <PopularHeader>Popular News</PopularHeader>
              {popularStories && popularStories.map(item => 
                <PopularNews 
                  popularId={item.id}
                  popularNewsTitle={item.title}
                  popularTime={formatDate(item.timeISO)}
                  popularUrl={item.url} 
                  key={item.id} 
                  onFavoriteClick={() => addFavorite(item.id)} 
                  onBookmarkClick={() => addReadLaters(item.id)}  />
              )}
              </Route> 
              <Route path="/YourFavorite">
                <YourFavorite />
              </Route>
              <Route path="/ReadLater">
                <ReadLater />
              </Route>
            </Switch>
          </MainWrapper>
        </LightModeContentWrapper>
      </LightModeBg>
    </Router>
  );
}

export default App;

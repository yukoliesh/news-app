import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@xstyled/styled-components';
import { lightTheme, darkTheme } from './styles/global';
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
import { GlobalStyles, LightModeContentWrapper, LightModeHeaderWrapper, Header, BorderLine, HeadingLinkStyle, LightModeBg, HeaderTodayText, RightAlingedBox, HeaderCont, MainWrapper, PopularHeader, LatestHeader, HeadlinerColBox, FavoriteHeader }  from './styles/light_style';

const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  // const [value, setValue] = React.useState(false);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [readlaters, setReadLaters] = useLocalStorage('readlaters', []);
  const [theme, setTheme] = React.useState('light');

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
    console.log("add readlaters", readlaters);
    setReadLaters([...readlaters, postId])
  }

  // Create a new set of Favorite List
  const removeDuplicates = (arr) => {
    return Array.from(new Set(arr));
  }
  // Remove undefined if there is any
  const removeUndefined = (item) => {
    return item.filter(x => x !== undefined)
  }
  // For Your Favorite Page
  const uniqueFavorite = removeDuplicates(favorites);
  const favObjsFromNewStories = uniqueFavorite.map(id => newStories.find(obj => obj.id === id));
  const favObjsFromPopStories = uniqueFavorite.map(id => popularStories.find(obj => obj.id === id));
  const cleanFavsNewSt = removeUndefined(favObjsFromNewStories);
  const cleanFavsPopSt = removeUndefined(favObjsFromPopStories);
  const childrenFavs = cleanFavsNewSt.concat(cleanFavsPopSt);

  // For Read Later Page
  const uniqueReadLaters = removeDuplicates(readlaters);
  const readLaterObjsFromNewStories = uniqueReadLaters.map(id => newStories.find(obj => obj.id === id));
  const readLaterObjsFromPopStories = uniqueReadLaters.map(id => popularStories.find(obj => obj.id === id));
  const cleanReadLaterNewSt = removeUndefined(readLaterObjsFromNewStories);
  const cleanReadLaterPopSt = removeUndefined(readLaterObjsFromPopStories);
  const childrenReadLater = cleanReadLaterNewSt.concat(cleanReadLaterPopSt);

  console.log("read laters", childrenReadLater);

  // Theme toggle
  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  
  return (
    <Router>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
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
                  <ModeToggle isOn={theme} handleToggle={toggleTheme} onColor="#4100FA" />
                
                </RightAlingedBox>
              </HeaderCont>
            </LightModeHeaderWrapper>
            <MainWrapper>
            <Switch>
              <Route exact path="/">
                <FrontHeadliner />
              </Route>
              <Route path="/LatestNews">
                <HeadlinerColBox>
                  <LatestHeader>Latest News</LatestHeader>
                  {newStories && newStories.map(item => 
                    <LatestNews 
                      latestNewsId={item.id}
                      latestNewsTitle={item.title}
                      latestTime={formatDate(item.timeISO)}
                      latestUrl={item.url}
                      key={item.id} 
                      onFavoriteClick={() => addFavorite(item.id)} 
                      onBookmarkClick={() => addReadLaters(item.id)}  /> 
                    )}
                </HeadlinerColBox>
              </Route>
              <Route path="/PopularNews">
               <HeadlinerColBox>
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
                </HeadlinerColBox>
              </Route> 
              <Route path="/YourFavorite">
                <HeadlinerColBox>
                  <FavoriteHeader>Your Favorite</FavoriteHeader>
                  {childrenFavs && childrenFavs.map(item => 
                    <YourFavorite key={item.id} favoriteId={item.id} favoriteUrl={item.url} favoriteTitle={item.title} favoriteTimeISO={formatDate(item.timeISO)} />
                  )}
                </HeadlinerColBox>
              </Route>
              <Route path="/ReadLater">
                <HeadlinerColBox>
                  <FavoriteHeader>Read Later</FavoriteHeader>
                  {childrenReadLater && childrenReadLater.map(item =>
                    <ReadLater key={item.id} readLaterId={item.id} readLaterUrl={item.url} readLaterTitle={item.title} readLaterTimeISO={formatDate(item.timeISO)} />
                  )}
                </HeadlinerColBox>
              </Route>
            </Switch>
          </MainWrapper>
          </LightModeContentWrapper>
        </LightModeBg>
      </ThemeProvider>
    </Router>
  );
}

export default App;

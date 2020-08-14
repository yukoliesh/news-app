import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@xstyled/styled-components';
import { lightTheme, darkTheme } from './styles/global';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { NEWS_QUERY, SAVE_QUERY } from './apollo/query';
import NavMenu from "./components/NavMenu";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import FrontHeadliner from "./components/FrontHeadliner";
import LatestNews from './components/LatestNews';
import PopularNews from './components/PopularNews';
// import YourFavorite from './components/YourFavorite';
// import ReadLater from './components/ReadLater';
import ModeToggle from "./components/ModeToggle/ModeToggle";
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDarkMode } from './hooks/useDarkMode';
import { ContentWrapper, HeaderWrapper, Header, BorderLine, HeadingLinkStyle, Background, HeaderTodayText, RightAlingedBox, HeaderCont, MainWrapper, PopularHeader, LatestHeader, HeadlinerColBox, FavoriteHeader, LightModeSwitchLabel }  from './styles/style';
import { GlobalStyles } from './styles/global';
import { formatDate } from './utils';

const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  const { data } = useMutation(SAVE_QUERY);
  // const [value, setValue] = React.useState(false);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [readlaters, setReadLaters] = useLocalStorage('readlaters', []);
  // const [theme, setTheme] = React.useState('light');
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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

  // Adding postId to localStorage
  let favoriteSet = new Set(favorites);
  const addFavorite = (postId) => {
    favoriteSet.add(postId);
    const newFav = [...favoriteSet]
    setFavorites(newFav);
  }

  let readLatersSet = new Set(readlaters);
  const addReadLaters = (postId) => {
    readLatersSet.add(postId);
    const newReadLaters = [...readLatersSet]
    setReadLaters(newReadLaters);
  }

  console.log("add fav", favorites);
  // console.log("add laters", {readlaters});

  // Create a new set of Favorite List without duplicated postId
  // const removeDuplicates = (arr) => {
  //   return Array.from(new Set(arr));
  // }
  // // Remove undefined if there is any
  // const removeUndefined = (item) => {
  //   return item.filter(x => x !== undefined)
  // }

  // Get the objects with the id that matches with the id from the array of Your Favorite
//   const favObjsFromNewStories = favorites.map(id => newStories.find(obj => obj.id === id));
//   const favObjsFromPopStories = favorites.map(id => popularStories.find(obj => obj.id === id));
//  console.log({favObjsFromNewStories});
  // Concatenate two arrays from newStories and popularStories for Your Favorite page
  // const childrenFavs = favObjsFromNewStories.concat(favObjsFromPopStories);

  // For Read Later Page
  // const readLaterObjsFromNewStories = readlaters.map(id => newStories.find(obj => obj.id === id));
  // const readLaterObjsFromPopStories = readlaters.map(id => popularStories.find(obj => obj.id === id));
    // Concatenate two arrays from newStories and popularStories for Read Later page
  // const childrenReadLater = readLaterObjsFromNewStories.concat(readLaterObjsFromPopStories);

  // This is for DarkMode - to check if darkmode component has mounted or not.
  if (!componentMounted) {
    return <div />
  };
  
  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Background>
          <ContentWrapper>
            <HeaderWrapper>
              <HeaderCont>
                <HeadingLinkStyle to="/">
                  <Header><HeaderTodayText>Today's </HeaderTodayText>Tech News</Header>
                </HeadingLinkStyle>
                <BorderLine />
                <NavMenu />
                <RightAlingedBox>
                  <LightModeSwitchLabel>
                    {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                  </LightModeSwitchLabel>
                  <ModeToggle isOn={theme} handleToggle={() => toggleTheme()} onColor="#4100FA" />
                </RightAlingedBox>
              </HeaderCont>
            </HeaderWrapper>
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
                  
                </HeadlinerColBox>
              </Route>
              <Route path="/ReadLater">
                <HeadlinerColBox>
                  <FavoriteHeader>Read Later</FavoriteHeader>
                 
                </HeadlinerColBox>
              </Route>
            </Switch>
          </MainWrapper>
          </ContentWrapper>
        </Background>
      </ThemeProvider>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@xstyled/styled-components';
import { isMobileOnly } from "react-device-detect";
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
import { useDarkMode } from './hooks/useDarkMode';
import { ContentWrapper, HeaderWrapper, Header, BorderLine, HeadingLinkStyle, Background, HeaderTodayText, RightAlingedBox, HeaderCont, MainWrapper, PopularHeader, LatestHeader, HeadlinerColBox, FavoriteHeader, LightModeSwitchLabel, ZeroState, NavButton, HeadlinerColBoxMobileNav }  from './styles/style';
import { GlobalStyles } from './styles/global';
import { formatDate } from './utils';
import { NavMenuMobile } from "./components/NavMenuMobile";

const App = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [readlaters, setReadLaters] = useLocalStorage('readlaters', []);
  const [favicon, setFavIcon] = useLocalStorage('favicon', []);
  const [bmicon, setBmIcon] = useLocalStorage('bmicon', []);

  const [opened, setOpened] = React.useState(false);

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (loading) return <Loading />;
  if (error) {
    return <ErrorPage />;
  }
  if (!data) return <p>Not found</p>;

  // Getting the stories
  const popularStories = data.hn.topStories;
  const newStories = data.hn.newStories;

  // Adding postId to localStorage

  /**
   * Adds a new post to state
   * @param {{ id: string, url: string}} post 
   */
  
  // let clicks = 0;
  const addFavorite = (post) => {
    // for checking undefined or any falsy value
    if (!post) {
      return;
    }
    const isPost = favorites.some(fav => fav.id === post.id)
    if (!isPost) {
      setFavorites([...favorites, post])
      setFavIcon([...favicon, post.id]);
    }
    
    const faviconEle = document.getElementById("favicon-" + post.id);
    faviconEle.setAttribute("class", "fas fa-heart");
    
  }

  const addReadLaters = (post) => {
    // for checking undefined or any falsy value
    if (!post) {
      return;
    }
    const isPost = readlaters.some(laters => laters.id === post.id)
    if (!isPost) {
      setReadLaters([...readlaters, post])
      setBmIcon([...bmicon, post.id])
    }
    const bmIcon = document.getElementById("bookmarkicon-" + post.id);
    bmIcon.setAttribute("class", "fas fa-bookmark");
  }

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
            {!isMobileOnly && (
              <HeaderCont>
                <HeadingLinkStyle to="/">
                  <Header data-testid="today-news-title"><HeaderTodayText>Today's </HeaderTodayText>Tech News</Header>
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
            )}
            {isMobileOnly &&  (
              <HeaderCont>
                <HeadlinerColBoxMobileNav>
                  <NavButton onClick={() => setOpened(true)}>
                    <i className="fas fa-bars"></i>
                  </NavButton>
                </HeadlinerColBoxMobileNav>
                <HeadingLinkStyle to="/">
                  <Header data-testid="today-news-title"><HeaderTodayText>Today's </HeaderTodayText>Tech News</Header>
                </HeadingLinkStyle>
                <RightAlingedBox>
                  <LightModeSwitchLabel>
                    {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                  </LightModeSwitchLabel>
                  <ModeToggle isOn={theme} handleToggle={() => toggleTheme()} onColor="#4100FA" />
                </RightAlingedBox>
              </HeaderCont>
            )}
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
                        id={item.id}
                        title={item.title}
                        timeISO={formatDate(item.timeISO)}
                        url={item.url}
                        key={item.id} 
                        onFavoriteClick={() => addFavorite(item)} 
                        onBookmarkClick={() => addReadLaters(item)}  /> 
                      )}
                  </HeadlinerColBox>
                </Route>
                <Route path="/PopularNews">
                <HeadlinerColBox data-testid="more-popular-news">
                    <PopularHeader>Popular News</PopularHeader>
                    {popularStories && popularStories.map(item => 
                      <PopularNews 
                        id={item.id}
                        title={item.title}
                        timeISO={formatDate(item.timeISO)}
                        url={item.url} 
                        key={item.id} 
                        onFavoriteClick={() => addFavorite(item)} 
                        onBookmarkClick={() => addReadLaters(item)}  />
                    )}
                  </HeadlinerColBox>
                </Route> 
                <Route path="/YourFavorite">
                  <HeadlinerColBox>
                    <FavoriteHeader>Your Favorite</FavoriteHeader>
                    <ZeroState>{favorites.length === 0 && ("You haven't marked any article as Your Favorite yet.")}</ZeroState>
                    {favorites && favorites.length >= 1 && favorites.map(item => 
                      <YourFavorite id={item.id} key={item.id} url={item.url} title={item.title} timeISO={formatDate(item.timeISO)} />
                    )}
                  </HeadlinerColBox>
                </Route>
                <Route path="/ReadLater">
                  <HeadlinerColBox>
                    <PopularHeader>Read Later</PopularHeader>
                    {readlaters.length === 0 && "You haven't marked any article as Read Later yet."}
                    {readlaters && readlaters.length >= 1 && readlaters.map(item => 
                      <ReadLater id={item.id} key={item.id} url={item.url} title={item.title} timeISO={formatDate(item.timeISO)} />
                    )}
                  </HeadlinerColBox>
                </Route>
              </Switch>
            </MainWrapper>
            {isMobileOnly && opened && (
              <NavMenuMobile handleClickOpen={() => setOpened(false)} />
            )}
          </ContentWrapper>
        </Background>
      </ThemeProvider>
    </Router>
  );
}

export default App;

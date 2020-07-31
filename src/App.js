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
import { LightModeContentWrapper, LightModeHeaderWrapper, Header, BorderLine, HeadingLinkStyle, LightModeBg, HeaderTodayText, RightAlingedBox, HeaderCont, MainWrapper, PopularHeader, LatestHeader, HeadlinerColBox, FavoriteHeader }  from './stylesheet/stylesheet';

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
    console.log("add readlaters", readlaters);
    setReadLaters([...readlaters, postId])
  }

  // Create a new set of Favorite List
  const removeDuplicates = (arr) => {
    return Array.from(new Set(arr));
  }
  const uniqueFavorite = removeDuplicates(favorites);
  const uniqueReadLaters = removeDuplicates(readlaters);
  
  // Remove undefined if there is any
  const removeUndefined = (item) => {
    return item.filter(x => x !== undefined)
  }
 

  const favObjsFromNewStories = uniqueFavorite.map(id => newStories.find(obj => obj.id === id));
  const favObjsFromPopStories = uniqueFavorite.map(id => popularStories.find(obj => obj.id === id));

  // const filteredFavs = favObjsFromNewStories.filter(x => x !== undefined);

  const cleanFavsNewSt = removeUndefined(favObjsFromNewStories);
  const cleanFavsPopSt = removeUndefined(favObjsFromPopStories);
  const childrenFavs = cleanFavsNewSt.concat(cleanFavsPopSt);
  console.log("clean", childrenFavs);


  const readLaterObjsFromNewStories = uniqueReadLaters.map(id => newStories.find(obj => obj.id === id));
  const readLaterObjsFromPopStories = uniqueReadLaters.map(id => popularStories.find(obj => obj.id === id));
  const childrenReadLaters = readLaterObjsFromNewStories.concat(readLaterObjsFromPopStories);
  console.log("favObjsFromNewStories", favObjsFromNewStories);
  console.log("favObjsFromPopStories", favObjsFromPopStories);
  // console.log("fav", childrenFavs);
  console.log("filtered", uniqueFavorite);
  console.log("read laters", childrenReadLaters);


  
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
                <FavoriteHeader>Your Favorite</FavoriteHeader>
                
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

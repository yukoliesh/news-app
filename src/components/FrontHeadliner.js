import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import { useLocalStorage } from '../hooks/useLocalStorage';
import NewsItem from './NewsItem';
import { formatDate } from '../utils';
import Loading from "../Loading";
import ErrorPage from "../ErrorPage";
import { HeadlinerColBox, LatestHeader, PopularHeader, HeadlinerColCont, MoreLatestButton, CenterBox, MorePopularButton, Box }  from '../styles/style';

const FrontHeadliner = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [readlaters, setReadLaters] = useLocalStorage('readlaters', []);

  
  if (loading) return <Loading />;
  if (error) {
    console.error(error);
    return <ErrorPage />;
  } 
  if (!data) return <p>Not found</p>;

  const topStories = data.hn.topStories;
  const newStories = data.hn.newStories;

  const limitTopStories = topStories.slice(0, 5);
  const limitNewStories = newStories.slice(0, 5);

  // let clicks = 0;
  const addFavorite = (post) => {
    // for checking undefined or any falsy value
    if (!post) {
      return;
    }
    // Do we have any duplicates? check-in
    const matchingPostFound = favorites.some(fav => fav.id === post.id)
    // If we don't have any duplicates then, set Favorites array with the object that the user clicked
    if (!matchingPostFound) {
      setFavorites([...favorites, post])
    }
    const favicon = document.getElementById("favicon-" + post.id);
    favicon.setAttribute("class", "fas fa-heart");
  }

  const addReadLaters = (post) => {
    // for checking undefined or any falsy value
    if (!post) {
      return;
    }
    const matchingPostFound = readlaters.some(laters => laters.id === post.id)
    if (!matchingPostFound) {
      setReadLaters([...readlaters, post])
    }
    const bmIcon = document.getElementById("bookmarkicon-" + post.id);
    bmIcon.setAttribute("class", "fas fa-bookmark");
  }
  
  return (
    <HeadlinerColBox row m={3}>
      <Box col={{ xs: 1, md: 1 / 2 }} p={2}> 
        <HeadlinerColCont>
          <LatestHeader>Latest News</LatestHeader>
          <Box mt={5} pb={4}>
          {newStories && limitNewStories.map(item => 
            <NewsItem 
              id={item.id}
              title={item.title} 
              timeISO={formatDate(item.timeISO)} 
              url={item.url} 
              key={item.id} 
              onFavoriteClick={() => addFavorite(item)} 
              onBookmarkClick={() => addReadLaters(item)} />
            )}
          </Box>
          <CenterBox mt={5} mb={3}>
            <MoreLatestButton to="/LatestNews" data-testid="more-latest-btn">More Latest News</MoreLatestButton>
          </CenterBox>
        </HeadlinerColCont>
      </Box>
      <Box col={{ xs: 1, md: 1 / 2 }}  p={2}>
        <HeadlinerColCont>
          <PopularHeader>Popular News</PopularHeader>
          <Box mt={5} pb={4}>
          {topStories && limitTopStories.map(item => 
            <NewsItem 
              id={item.id}
              title={item.title} 
              timeISO={formatDate(item.timeISO)} 
              url={item.url} 
              key={item.id}
              onFavoriteClick={() => addFavorite(item)} 
              onBookmarkClick={() => addReadLaters(item)} />
            )}
          </Box>
          <CenterBox mt={5} mb={3}>
            <MorePopularButton to="/PopularNews" data-testid="more-popular-btn">More Popular News</MorePopularButton>
          </CenterBox>
        </HeadlinerColCont>
      </Box>
    </HeadlinerColBox>
  );
}

FrontHeadliner.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  timeISO: PropTypes.string,
  onFavoriteClick: PropTypes.func,
  onBookmarkClick: PropTypes.func
};

export default FrontHeadliner;
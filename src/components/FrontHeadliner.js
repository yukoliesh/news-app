import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import { useLocalStorage } from '../hooks/useLocalStorage';
import NewsItem from './NewsItem';
import { formatDate } from '../utils';
import { HeadlinerColBox, LatestHeader, PopularHeader, HeadlinerColCont, MoreLatestButton, CenterBox, MorePopularButton, Box }  from '../styles/style';

const FrontHeadliner = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [readlaters, setReadLaters] = useLocalStorage('readlaters', []);

  // console.log( { loading, error, data });
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
    const isPost = favorites.some(fav => fav.id === post.id)
    if (!isPost) {
      setFavorites([...favorites, post])
    }
    console.log("hey");
  }

  const addReadLaters = (post) => {
    // for checking undefined or any falsy value
    if (!post) {
      return;
    }
    const isPost = readlaters.some(laters => laters.id === post.id)
    if (!isPost) {
      setReadLaters([...readlaters, post])
    }
  }
  
  return (
      <HeadlinerColBox row m={3}>
      <Box col={{ xs: 1, md: 1 / 2 }} p={2}> 
        <HeadlinerColCont>
          <LatestHeader>Latest News</LatestHeader>
          <Box mt={5} pb={4}>
          {newStories && limitNewStories.map(item => 
            <NewsItem 
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
  timeISO: PropTypes.string
};

export default FrontHeadliner;
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Box, PopularHeader }  from '../stylesheet/stylesheet';

const PopularNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log(loading, error, data);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [isError, setIsError] = React.useState(true);
  
  
  const [liked, setLiked] = useLocalStorage('liked', 'test');
  const [bookmarked, setBookmarked] = useLocalStorage('bookmarked', 'test2');

  console.log('liked', liked);
  console.log('bookmarked', bookmarked);

  const onLikedClick = (e) => {
    const id = e.target.id;
    setLiked(id);
  }

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <ErrorPage />;
  } 
  if (!data) return <p>Not found</p>;

  const topStories = data.hn.topStories;

  return (
    <React.Fragment>
      <Box>
        <PopularHeader>Popular News</PopularHeader>
        {topStories && topStories.map(item => 
          <NewsItem 
            id={item.id}
            title={item.title} 
            timeISO={item.timeISO} 
            url={item.url} 
            key={item.id} 
            onFavoriteClick={onLikedClick} 
            onBookmarkClick={e => setBookmarked(e.target.id)} />
        )}
      </Box>
    </React.Fragment>
  );
}

export default PopularNews;
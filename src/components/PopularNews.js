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
  const [favorites, setFavorites] = useLocalStorage('favorites', [])
  console.log(loading, error, data);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [isError, setIsError] = React.useState(true);
  const addFavorite = (postId) => {
    setFavorites([...favorites, postId])
  }

  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <ErrorPage />;
  } 
  if (!data) return <p>Not found</p>;
  
  const topStories = data.hn.topStories;
  const formatDate = (timeISO) => {
    return `${timeISO.split("T")[0]} ${timeISO.split("T")[1]}` 
  }
  console.log(formatDate)

  return (
    <React.Fragment>
      <Box>
        <PopularHeader>Popular News</PopularHeader>
        {topStories && topStories.map(item => 
          <NewsItem 
            id={item.id}
            title={item.title} 
            timeISO={formatDate(item.timeISO)} 
            url={item.url} 
            key={item.id} 
            onFavoriteClick={() => addFavorite(item.id)} 
            onBookmarkClick={e => addFavorite(item.id)} />
        )}
      </Box>
    </React.Fragment>
  );
}

export default PopularNews;
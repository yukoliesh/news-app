import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';

import { Box }  from '../stylesheet/stylesheet';

const PopularNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);

  // Loading
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <ErrorPage />;
  } 
  if (!data) return <p>Not found</p>;

  return (
    <Box>
      <NewsItem 
        id={props.popularId}
        title={props.popularNewsTitle} 
        timeISO={props.popularTime} 
        url={props.popularUrl} 
        key={props.popularKey} 
        onFavoriteClick={props.onFavoriteClick} 
        onBookmarkClick={props.onBookmarkClick} />
    </Box>
  );
}

export default PopularNews;
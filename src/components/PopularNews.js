import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';

import { Box }  from '../styles/style';

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
        id={props.id}
        title={props.title} 
        timeISO={props.timeISO} 
        url={props.url}
        onFavoriteClick={props.onFavoriteClick} 
        onBookmarkClick={props.onBookmarkClick} />
    </Box>
  );
}

PopularNews.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  timeISO: PropTypes.string,
  onFavoriteClick: PropTypes.func,
  onBookmarkClick: PropTypes.func
};

export default PopularNews;
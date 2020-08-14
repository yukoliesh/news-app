import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { Box }  from '../styles/style';

const LatestNews = (props) => {
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
        id={props.latestNewsId}
        title={props.latestNewsTitle} 
        timeISO={props.latestTime} 
        url={props.latestUrl} 
        key={props.latestKey} 
        onFavoriteClick={props.onFavoriteClick} 
        onBookmarkClick={props.onBookmarkClick} />
    </Box>
  );
}

LatestNews.propTypes = {
  latestNewsId: PropTypes.string,
  latestUrl: PropTypes.string,
  latestNewsTitle: PropTypes.string,
  latestTime: PropTypes.string,
  onFavoriteClick: PropTypes.func,
  onBookmarkClick: PropTypes.func
};
export default LatestNews;
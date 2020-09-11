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
  // Error
  if (error) {
    console.error(error);
    return <ErrorPage />;
  } 
  if (!data) return <p>Not found</p>;

  return (
    <Box>
      <NewsItem 
        favorited={props.item.favorited}
        bookmarked={props.item.bookmarked}
        id={props.item.id}
        title={props.item.title}
        timeISO={props.item.timeISO}
        url={props.item.url}
        onFavoriteClick={props.onFavoriteClick} 
        onBookmarkClick={props.onBookmarkClick} />
    </Box>
  );
}

LatestNews.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  timeISO: PropTypes.string,
  onFavoriteClick: PropTypes.func,
  onBookmarkClick: PropTypes.func
};
export default LatestNews;
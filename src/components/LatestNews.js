import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';

const LatestNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <React.Fragment>
      <p>This is the latest news</p>
    </React.Fragment>
  );
}

export default LatestNews;
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';

const PopularNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <div>
      <p>This is the popular news</p>
    </div>
  );
}

export default PopularNews;
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';

const YourFavorite = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <div>
      <p>This is the Your favorite page</p>
    </div>
  );
}

export default YourFavorite;
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';

const Bookmark = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <div>
      <p>This is the Bookmark page</p>
    </div>
  );
}

export default Bookmark;
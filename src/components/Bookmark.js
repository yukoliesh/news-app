import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import { LatestWrapper }  from '../stylesheet/stylesheet';

const Bookmark = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <LatestWrapper>
      <p>This is the Your Bookmark page.</p>
    </LatestWrapper>
  );
}

export default Bookmark;
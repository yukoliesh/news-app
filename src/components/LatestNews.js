import React from 'react';

const LatestNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  return (
    <LatestWrapper>
      <p>This is the latest news</p>
    </LatestWrapper>
  );
}

export default LatestNews;
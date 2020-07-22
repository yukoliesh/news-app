import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import { Box, LatestHeader }  from '../stylesheet/stylesheet';

const LatestNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  const newStories = data.hn.newStories;
  return (
    <React.Fragment>
      <Box>
        <LatestHeader>Latest News</LatestHeader>
        {newStories && newStories.map(item => 
          <NewsItem title={item.title} timeISO={item.timeISO} url={item.url} key={item.id} />
        )}
      </Box>
    </React.Fragment>
  );
}

export default LatestNews;
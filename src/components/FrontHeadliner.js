import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import { Box, HeadlinerColBox, LatestHeader, PopularHeader }  from '../stylesheet/stylesheet';

const FrontHeadliner = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  console.log("data", data.hn);
  const topStories = data.hn.topStories;
  const newStories = data.hn.newStories;
  return (
      <HeadlinerColBox row>
      <Box col={1 / 2} mr={3}> 
        <LatestHeader>Latest News</LatestHeader>
        // {newStories && newStories.map(item => 
        //   <NewsItem props.title={item.title} props.time={item.time} props.url={item.url} />
        //   )}
        
      </Box>
      <Box col >
        <PopularHeader>Popular News</PopularHeader>
      </Box>
    </HeadlinerColBox>
    
  );
}

export default FrontHeadliner;
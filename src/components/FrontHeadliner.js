import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import { Box, HeadlinerColBox, LatestHeader, PopularHeader }  from '../stylesheet/stylesheet';

const FrontHeadliner = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  const topStories = data.hn.topStories;
  const newStories = data.hn.newStories;


  // let topStoriesTime = data.hn.topStories.map(item => item.timeISO);
  
  // const localDateTime = () => {
  //   const newDate = topStoriesTime.forEach(item => new Date(item));
  //   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //   console.log(newDate.toLocaleDateString('de-DE', options));
   
  // }

  return (
      <HeadlinerColBox row>
      <Box col={1 / 2} mr={3}> 
        <LatestHeader>Latest News</LatestHeader>
        {newStories && newStories.map(item => 
          <NewsItem title={item.title} timeISO={item.timeISO} url={item.url} key={item.id} />
          )}
      </Box>
      <Box col >
        <PopularHeader>Popular News</PopularHeader>
        {topStories && topStories.map(item => 
          <NewsItem title={item.title} timeISO={item.timeISO} url={item.url} key={item.id} />
          )}
      </Box>
    </HeadlinerColBox>
    
  );
}

export default FrontHeadliner;
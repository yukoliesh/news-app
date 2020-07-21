import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import { HeadlinerColBox, LatestHeader, PopularHeader, HeadlinerColCont, Box }  from '../stylesheet/stylesheet';

const FrontHeadliner = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  const topStories = data.hn.topStories;
  const newStories = data.hn.newStories;

  const limitTopStories = topStories.slice(0, 4);
  const limitNewStories = newStories.slice(0, 4);



  // let topStoriesTime = data.hn.topStories.map(item => item.timeISO);
  
  // const localDateTime = () => {
  //   const newDate = topStoriesTime.forEach(item => new Date(item));
  //   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  //   console.log(newDate.toLocaleDateString('de-DE', options));
   
  // }

  return (
      <HeadlinerColBox row m={3}>
      <HeadlinerColCont col mr={3} p={2}> 
        <LatestHeader>Latest News</LatestHeader>
        <Box mt={5}>
        {newStories && limitNewStories.map(item => 
          <NewsItem title={item.title} timeISO={item.timeISO} url={item.url} key={item.id} />
          )}
        </Box>
      </HeadlinerColCont>
      <HeadlinerColCont col  p={2}>
          <PopularHeader>Popular News</PopularHeader>
          <Box mt={5}>
          {topStories && limitTopStories.map(item => 
            <NewsItem title={item.title} timeISO={item.timeISO} url={item.url} key={item.id} />
            )}
        </Box>
      </HeadlinerColCont>
    </HeadlinerColBox>
    
  );
}

export default FrontHeadliner;
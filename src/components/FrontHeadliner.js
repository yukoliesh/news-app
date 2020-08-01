import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import { HeadlinerColBox, LatestHeader, PopularHeader, HeadlinerColCont, MoreLatestButton, CenterBox, MorePopularButton, Box }  from '../styles/light_style';

const FrontHeadliner = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  const topStories = data.hn.topStories;
  const newStories = data.hn.newStories;

  const limitTopStories = topStories.slice(0, 5);
  const limitNewStories = newStories.slice(0, 5);


   // Format Date and time
   const formatDate = (timeISO) => {
    const date = timeISO.split("T")[0];
    const timeSplit = timeISO.split("."[0]);
    const time = timeSplit[0].split("T")[1];
    // return `${timeISO.split("T")[0]} ${timeISO.split(".")[0]}` 
    return date + " " + time;
  }
  
  return (
      <HeadlinerColBox row m={3}>
      <HeadlinerColCont col mr={3} p={2}> 
        <LatestHeader>Latest News</LatestHeader>
        <Box mt={5} pb={4}>
        {newStories && limitNewStories.map(item => 
          <NewsItem title={item.title} timeISO={formatDate(item.timeISO)} url={item.url} key={item.id} />
          )}
        </Box>
        <CenterBox mt={5} mb={3}>
          <MoreLatestButton to="/LatestNews">More Latest News</MoreLatestButton>
        </CenterBox>
      </HeadlinerColCont>
      <HeadlinerColCont col  p={2}>
        <PopularHeader>Popular News</PopularHeader>
        <Box mt={5} pb={4}>
        {topStories && limitTopStories.map(item => 
          <NewsItem title={item.title} timeISO={formatDate(item.timeISO)} url={item.url} key={item.id} />
          )}
        </Box>
        <CenterBox mt={5} mb={3}>
          <MorePopularButton to="/PopularNews">More Popular News</MorePopularButton>
        </CenterBox>
      </HeadlinerColCont>
    </HeadlinerColBox>
    
  );
}

export default FrontHeadliner;
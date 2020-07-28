import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import { Box, LatestHeader }  from '../stylesheet/stylesheet';

const LatestNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });
  const newStories = data.hn.newStories;

    // Format Date and time
    const formatDate = (timeISO) => {
    const date = timeISO.split("T")[0];
    const timeSplit = timeISO.split("."[0]);
    const time = timeSplit[0].split("T")[1];
    // return `${timeISO.split("T")[0]} ${timeISO.split(".")[0]}` 
    return date + " " + time;
  }
    
  return (
    <React.Fragment>
      <Box>
        <LatestHeader>Latest News</LatestHeader>
        {newStories && newStories.map(item => 
          <NewsItem title={item.title} timeISO={formatDate(item.timeISO)} url={item.url} key={item.id} />
        )}
      </Box>
    </React.Fragment>
  );
}

export default LatestNews;
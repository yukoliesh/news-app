import React from 'react';
import { Box }  from '../stylesheet/stylesheet';


const NewsItem = (props) => {
  return (
    <React.Fragment>
      <Box><a href={url} target="_blank">{title}</a></Box>
      <Box>{time}</Box>
    </React.Fragment>
  );
};

export default NewsItem;
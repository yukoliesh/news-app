import React from 'react';
import { Box }  from '../stylesheet/stylesheet';


const NewsItem = (props) => {
  return (
    <React.Fragment>
      <Box><a href={props.url}>{props.title}</a></Box>
      <Box>{props.time}</Box>
    </React.Fragment>
  );
};

export default NewsItem;
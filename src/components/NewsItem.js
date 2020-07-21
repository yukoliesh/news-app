import React from 'react';
import { Box, HyperLinkStyle }  from '../stylesheet/stylesheet';


const NewsItem = (props) => {
  return (
    <Box row mb={4}>
      <Box col={3 / 4} mr={3} >
        <Box pb={2}><HyperLinkStyle href={props.url}>{props.title}</HyperLinkStyle></Box>
        <Box>{props.timeISO}</Box>
      </Box>
      <Box col>
        <div><i className="fa fa-heart-o fa-lg"></i></div>
      </Box>
      <Box col>
        <div><i className="fa fa-bookmark-o fa-lg"></i></div>
      </Box>
    </Box>

  );
};

export default NewsItem;
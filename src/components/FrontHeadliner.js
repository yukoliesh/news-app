import React from 'react';
import { Box, HeadlinerColBox, LatestHeader, PopularHeader }  from '../stylesheet/stylesheet';

const FrontHeadliner = (props) => {
  return (
    <HeadlinerColBox row>
      <Box col={1 / 2} mr={3}> 
        <LatestHeader>Latest News</LatestHeader>
      </Box>
      <Box col >
        <PopularHeader>Popular News</PopularHeader>
      </Box>
    </HeadlinerColBox>
  );
}

export default FrontHeadliner;
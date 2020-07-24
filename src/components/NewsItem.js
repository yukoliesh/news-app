import React from 'react';
import { Box, HyperLinkStyle, NewsTitleEllipsisBox, HeartIcon }  from '../stylesheet/stylesheet';


const NewsItem = (props) => {
  return (
    <Box row mb={4}>
      <Box col={3 / 4} mr={3} >
        <NewsTitleEllipsisBox pb={2}>
          <HyperLinkStyle id={props.id} href={props.url} target="_blank">
            {props.title}
          </HyperLinkStyle>
        </NewsTitleEllipsisBox>
        <Box>{props.timeISO}</Box>
      </Box>
      <Box col>
        <HeartIcon onClick={props.onFavoriteClick}>
          <i id={props.id} className="fa fa-heart-o fa-lg"></i>
        </HeartIcon>
      </Box>
      <Box col>
        <div onClick={props.onBookmarkClick}>
          <i id={props.id} className="fa fa-bookmark-o fa-lg"></i>
        </div>
      </Box>
    </Box>

  );
};

export default NewsItem;
import React from 'react';
import PropTypes from 'prop-types';
import { Box, HyperLinkStyle, NewsTitleEllipsisBox, HeartIcon, ReadLaterIcon }  from '../styles/style';


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
          <i className="far fa-heart"></i>
        </HeartIcon>
      </Box>
      <Box col>
        <ReadLaterIcon onClick={props.onBookmarkClick}>
        <i className="far fa-bookmark"></i>
        </ReadLaterIcon>
      </Box>
    </Box>

  );
};

NewsItem.propTypes = {
  id: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string,
  timeISO: PropTypes.string
};

export default NewsItem;
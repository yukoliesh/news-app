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
        <HeartIcon onClick={props.onFavoriteClick} data-testid="favorite-icon" aria-label="Select this to save this article as a favorite article">
          <i className="far fa-heart" id={"favicon-" + props.id} data-testid={"favicon-" + props.id}></i>
        </HeartIcon>
      </Box>
      <Box col>
        <ReadLaterIcon onClick={props.onBookmarkClick} data-testid="bookmark-icon" aria-label="Select this to save and read later.">
          <i className="far fa-bookmark" id={"bookmarkicon-" + props.id}></i>
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
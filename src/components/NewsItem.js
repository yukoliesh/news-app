import React from 'react';
import PropTypes from 'prop-types';
import { Box, HyperLinkStyle, NewsTitleEllipsisBox, HeartIcon, ReadLaterIcon }  from '../styles/style';

// get our fontawesome imports
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <FontAwesomeIcon icon={[far, faHeart]} />
        <FontAwesomeIcon icon={faHeart} />
        <HeartIcon onClick={props.onFavoriteClick}>
          <i id={props.id} className="fa fa-heart-o fa-lg"></i>
        </HeartIcon>
      </Box>
      <Box col>
        <ReadLaterIcon onClick={props.onBookmarkClick}>
          <i id={props.id} className="fa fa-bookmark-o fa-lg"></i>
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
import React from 'react';
import { Box, HyperLinkStyle, SavedItems, SavedItem }  from '../styles/style';

const YourFavorite = (props) => {

  return (
    <React.Fragment>
      <SavedItems>
        <SavedItem>
          <HyperLinkStyle id={props.id} href={props.url} target="_blank">
            {props.title}
          </HyperLinkStyle>
          <Box>{props.timeISO}</Box>
        </SavedItem>
      </SavedItems>
    </React.Fragment>
  );
}

export default YourFavorite;
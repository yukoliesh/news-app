import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { Box, HyperLinkStyle, SavedItem, SavedItems }  from '../styles/style';

const ReadLater = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  console.log( { loading, error, data });

  // Loading
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <ErrorPage />;
  } 
  if (!data) return <p>Not found</p>;
  return (
    <React.Fragment>
      <SavedItems>
        <SavedItem>
          <HyperLinkStyle id={props.readLaterId} href={props.readLaterUrl} target="_blank">
            {props.readLaterTitle}
          </HyperLinkStyle>
          <Box>{props.readLaterTimeISO}</Box>
          </SavedItem>
      </SavedItems>
    </React.Fragment>
  );
}

export default ReadLater;
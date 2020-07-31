import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { Box, HyperLinkStyle }  from '../stylesheet/stylesheet';


const YourFavorite = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);

  // Loading
  if (loading) return <Loading />;
  if (error) {
    console.log(error);
    return <ErrorPage />;
  } 
  if (!data) return <p>Not found</p>;

  return (
    <React.Fragment>
      <Box>
        <HyperLinkStyle id={props.favoriteId} href={props.favoriteUrl} target="_blank">
          {props.favoriteTitle}
        </HyperLinkStyle>
        <Box>{props.favoriteTimeISO}</Box>
      </Box>
    </React.Fragment>
  );
}

export default YourFavorite;
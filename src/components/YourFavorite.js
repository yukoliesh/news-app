import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
// import SavedItem from './SavedItem';
import { Box, FavoriteHeader, HyperLinkStyle }  from '../stylesheet/stylesheet';


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
        <FavoriteHeader>Your Favorite</FavoriteHeader>
        <HyperLinkStyle id={props.id} href={props.url} target="_blank">
          {props.title}
        </HyperLinkStyle>
        <Box>{props.timeISO}</Box>
      </Box>
    </React.Fragment>
  );
}

export default YourFavorite;
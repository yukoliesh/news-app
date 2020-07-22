import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { Box, PopularHeader }  from '../stylesheet/stylesheet';

const PopularNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(true);

  if (isLoading) return <Loading loading={isLoading} />;
  // React.useEffect(()  => {
  //   if(data){
  //     setIsLoading(false);
  //   }
  // }, [data]);


  if (isError) return <ErrorPage error={isError} />;
  if (!data) return <p>Not found</p>;

  console.log(loading, error, data);
 

  const topStories = data.hn.topStories;
  return (
    <React.Fragment>
      <Box>
        <PopularHeader>Popular News</PopularHeader>
        {topStories && topStories.map(item => 
          <NewsItem title={item.title} timeISO={item.timeISO} url={item.url} key={item.id} />
        )}
      </Box>
    </React.Fragment>
  );
}

export default PopularNews;
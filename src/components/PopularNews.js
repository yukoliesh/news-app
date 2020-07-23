import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { NEWS_QUERY } from '../apollo/query';
import NewsItem from './NewsItem';
import Loading from '../Loading';
import ErrorPage from '../ErrorPage';
import { Box, PopularHeader }  from '../stylesheet/stylesheet';

const PopularNews = (props) => {
  const { loading, error, data } = useQuery(NEWS_QUERY);
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [isError, setIsError] = React.useState(true);
  if (loading) return <Loading />;
  if (error) return <ErrorPage />;
  if (!data) return <p>Not found</p>;

  // if (isLoading) return <Loading loading={isLoading} />;
  // React.useEffect(()  => {
  //   if(data){
  //     setIsLoading(false);
  //   }
  // }, [data]);

  console.log(loading, error, data);
  const topStories = data.hn.topStories;

  const [liked, setLiked] = useLocalStorage('liked', '');
  const [bookmarked, setBookmarked] = useLocalStorage('bookmarked', '');



  return (
    <React.Fragment>
      <Box>
        <PopularHeader>Popular News</PopularHeader>
        {topStories && topStories.map(item => 
          <NewsItem t
            itle={item.title} 
            timeISO={item.timeISO} 
            url={item.url} 
            key={item.id} 
            onFavoriteClick={e => setLiked(e.target.value)} 
            onBookmarkClick={e => setBookmarked(e.target.value)} />
        )}
      </Box>
    </React.Fragment>
  );
}

export default PopularNews;
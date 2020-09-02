import { gql } from 'apollo-boost';

// graphql 

export const NEWS_QUERY = gql`
  {
    hn{
      topStories{
        id
        timeISO
        url
        title
      }
      newStories{
        id
        timeISO
        url
        title
      }
    }
  }
`;

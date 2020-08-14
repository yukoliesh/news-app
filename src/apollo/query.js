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

// export const SAVE_QUERY = gql`
//   mutation SavePostMutation($id: INT!)
//   {
//     hn{
//       item(id: $id){
//         id
//         title
//         url
//         timeISO
//       }
//     }
//   }
// `;
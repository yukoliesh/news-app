import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/react-testing';
import App from './App';
import { NEWS_QUERY } from './apollo/query';

// test('should render without error', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const mocks = [
  {
    request: {
      query: NEWS_QUERY
    },
    result: {
      data: {
        hn: {
          newStories: [
            {
              id: "24213018",
              title: "Newly Discovered Documents Reveal, Ras Tafari Crowned “Lord of Lords” in 1917",
              url: "https://www.rastafaricoalition.org/articles/lordoflords.htm",
              timeISO: "2020-08-19T17:20:43.000Z"
            }
          ],
          topStories: [
            {
              id: "24211414",
              title: "Secret Gyms and the Economics of Prohibition",
              url: "https://www.npr.org/sections/money/2020/08/11/900895704/secret-gyms-and-the-economics-of-prohibition?s=09",
              timeISO: "2020-08-19T15:29:44.000Z"
            }
          ]
        }
      }
    }
  }
]

// What to test
// Does it render the title
// Does it render the navigatioin
// Does it render the latest news title, time, url
// Does the More Latest News button lead you to Latest News page
// Does the More Popular News button lead you to Popular News page
// Is the favorite icon clickable and save the title, url and time to Favorite page
// Is the Bookmark icon clickable and save the title, url and time to Read Later page
// Can Dark Mode change the theme

describe('App', () => {
  afterEach(cleanup)

  it('should render App title', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )

    const titleElement = await findByTestId(container, 'today-news-title')
    // const titleContent = await findByText(titleElement, 'title')

    // expect(titleElement).toBeTruthy()
    // expect(titleContent).toBeTruthy()
  })

})
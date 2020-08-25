import React from 'react';
import { render, cleanup, wait, getByRole, waitFor, waitForElement, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import App from './App';
import { NEWS_QUERY } from './apollo/query';
import { act } from 'react-dom/test-utils';
import FrontHeadliner from './components/FrontHeadliner';

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
    const { getByRole } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    await waitFor(() => screen.getByRole('heading', { name: /today's tech news/i }))
  })

  it('should render App Navigation', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    await waitFor(() => screen.getByText('Home'))
    await waitFor(() => screen.findAllByText('Latest News'))
    await waitFor(() => screen.findAllByText('Popular News'))
    await waitFor(() => screen.getByText('Your Favorite'))
    await waitFor(() => screen.getByText('Read Later'))
  })

  it('should render App and navigates to Latest News page when the Latest News button was clicked', async () => {
    const { container, getByText, debug } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    debug();
    expect(container.innerHTML).toMatch('Today\'\s Tech News');
    act(() => {
      fireEvent.click(screen.getByText(/latest news/i));
    });
    await wait(container.innerHTML).toMatch('Latest News');
  })
})
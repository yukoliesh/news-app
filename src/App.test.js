import React from 'react';
import { render, cleanup,  waitFor, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import App from './App';
import { NEWS_QUERY } from './apollo/query';

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
// Does it render the title (check)
// Does it render the navigatioin (check)
// Does it render the popular news title, time, url (check)
// Does the More Latest News button lead you to Latest News page (check)
// Is the favorite icon clickable and save the title, url and time to Favorite page (check)
// Can Dark Mode change the theme (check)

describe('App', () => {
  afterEach(cleanup)

  it('should render loading page', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    expect(screen.getByTestId("loading-dots")).toBeInTheDocument();
  })

  it('should render App title', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    await screen.findByTestId("today-news-title");
    await screen.getByRole('heading', { name: /today's tech news/i })
  })
  
  it('should render App and navigates to Popular News page when the More Popular News button was clicked', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    await screen.findByTestId("today-news-title");
    await screen.getByRole('heading', { name: /today's tech news/i })
    expect(container.innerHTML).toMatch('Popular News');
    fireEvent.click(screen.getByTestId('more-popular-btn'));
    const header = await screen.findByTestId('more-popular-news');
    expect(header).toBeInTheDocument();
  })

  it('should render App Navigation and navigates to the destination', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    await screen.findByTestId("today-news-title");
    await screen.findByText("Home");
    await screen.findByText("Latest News");
    await screen.findByTestId("popular-header-nav");
    await screen.findByText("Your Favorite");
    await screen.findByText("Read Later");

    // Popular News
    expect(screen.getByTestId('popular-header-nav')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('popular-header-nav'));
    expect(container.innerHTML).toMatch('Popular News');
    // Latest News
    expect(screen.getByTestId('latest-header-nav')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('latest-header-nav'));
    expect(container.innerHTML).toMatch('Latest News');
    // Your Favorite 
    expect(screen.getByTestId('favorite-header-nav')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('favorite-header-nav'));
    expect(container.innerHTML).toMatch('Your Favorite');
    // Read Later
    expect(screen.getByTestId('readlater-header-nav')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('readlater-header-nav'));
    expect(container.innerHTML).toMatch('Read Later');
  })

  it('should render Popular News Page and should see the Popular news title and its post time and the title is clickable', async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    await screen.findByTestId("today-news-title");
    await screen.findByTestId('popular-header-nav')
    fireEvent.click(screen.getByTestId('popular-header-nav'));
    expect(getByTestId('more-popular-news')).toBeInTheDocument();
    expect(getByText('Secret Gyms and the Economics of Prohibition')).toBeInTheDocument();
    expect(getByText('2020-08-19 15:29:44')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Secret Gyms and the Economics of Prohibition'));
  })
  
  it("should turn the color theme from Light Mode to Dark Mode when the modeToggle is clicked", async () => {
    const { getByTestId, getByText } = render( 
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    );

    await screen.findByTestId("today-news-title");
    expect(getByText("Light Mode")).toBeInTheDocument();
    const modeToggle = getByTestId("mode-toggle");
    fireEvent.click(modeToggle);
    expect(getByText("Dark Mode")).toBeInTheDocument();
  });

  // change the name of the test
  it("should see the title in Your Favorite page after you clicked the favorite icon of the selected news", async () => {
     render( 
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    );
    
    const favIcon = await screen.findByTestId("favicon-24211414");
    expect(favIcon).toBeInTheDocument();
    fireEvent.click(favIcon);
    fireEvent.click(screen.getByText("Your Favorite"));
    expect(screen.getByText("Secret Gyms and the Economics of Prohibition"));
  });
})
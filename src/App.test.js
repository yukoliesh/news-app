import React from 'react';
import { render, cleanup,  waitFor, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import App from './App';
import { NEWS_QUERY } from './apollo/query';
import { act } from 'react-dom/test-utils';

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

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null)
      },
      writable: true
    });
  });

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
    await waitFor(() => screen.getByRole('heading', { name: /today's tech news/i }))
  })
  
  it('should render App and navigates to Popular News page when the More Popular News button was clicked', async () => {
    const { container } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    await screen.findByTestId("today-news-title");
    await waitFor(() => screen.getByRole('heading', { name: /today's tech news/i }));
    expect(container.innerHTML).toMatch('Popular News');
    act(() => {
      fireEvent.click(screen.getByTestId('more-popular-btn'));
    });
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
    await waitFor(() => screen.getByText('Home'))
    await waitFor(() => screen.findAllByText('Latest News'))
    await waitFor(() => screen.findAllByText('Popular News'))
    await waitFor(() => screen.getByText('Your Favorite'))
    await waitFor(() => screen.getByText('Read Later'))

    // Popular News
    expect(screen.getByTestId('popular-header-nav')).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByTestId('popular-header-nav'));
    });
    expect(container.innerHTML).toMatch('Popular News');
    // Latest News
    expect(screen.getByTestId('latest-header-nav')).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByTestId('latest-header-nav'));
    });
    expect(container.innerHTML).toMatch('Latest News');
    // Your Favorite 
    expect(screen.getByTestId('favorite-header-nav')).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByTestId('favorite-header-nav'));
    });
    expect(container.innerHTML).toMatch('Your Favorite');
    // Read Later
    expect(screen.getByTestId('readlater-header-nav')).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByTestId('readlater-header-nav'));
    });
    expect(container.innerHTML).toMatch('Read Later');
  })

  it('should render Popular News Page and should see the Popular news title and its post time and the title is clickable', async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    await screen.findByTestId("today-news-title");
    await waitFor(() => screen.findByTestId('popular-header-nav'))
    act(() => {
      fireEvent.click(screen.getByTestId('popular-header-nav'));
    });
    expect(getByTestId('more-popular-news')).toBeInTheDocument();
    expect(getByText('Secret Gyms and the Economics of Prohibition')).toBeInTheDocument();
    expect(getByText('2020-08-19 15:29:44')).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getByText('Secret Gyms and the Economics of Prohibition'));
    });
  })

  it('should call localStorage getItem on render', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    )
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(3);
  })
  
  it("should call localStorage setItem for light theme mode to dark theme mode when it's clicked", async () => {
    const { getByTestId } = render( 
      <MockedProvider mocks={mocks} addTypename={false}>
        <App  />
      </MockedProvider>
    );

    await screen.findByTestId("today-news-title");
    const modeToggle = getByTestId("mode-toggle");
    fireEvent.click(modeToggle, { target: { value: "dark"
     } });

    expect(window.localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(window.localStorage.setItem).toHaveBeenNthCalledWith(2, "theme", "dark");
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
import React from 'react';
import { render, screen } from '@testing-library/react';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import NewsSearchContainer from './NewsSearchContainer';

// const server = setupServer(
//   rest.get(`https://newsapi.org/v2/everything?q=&apiKey=1035d26ed87d480dad7b5b19c00d27a9&qInTitle=${userQuery}`, (req, res, ctx) => {
//     return res(ctx.json());
//   })
// );

describe('NewsSearchContainer', () => {
  it('should display a list of news articles', async () => {
    render(<NewsSearchContainer />);

    screen.getByAltText('loading spinner');

    const input = await screen.findByLabelText('Search');
    userEvent.type(input, 'baseball');

    // eslint-disable-next-line max-len
    const submitButton = await screen.findByRole('button', { name: 'search-articles' });
    userEvent.click(submitButton);
    
    const ul = screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();    
    
  });
});

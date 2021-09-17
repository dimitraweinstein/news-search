import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import userEvent from '@testing-library/user-event';
import NewsSearchContainer from './NewsSearchContainer';
import QueryData from '../fixtures/queryData.json';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://newsapi.org/v2/everythingbaseball', (req, res, ctx) => {
    return res(ctx.json(QueryData));
  })
);

describe('NewsSearchContainer', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  it('should display a list of news articles', async () => {
    render(<NewsSearchContainer />);

    screen.getByAltText('loading spinner');

    const input = await screen.findByLabelText('Search');
    userEvent.type(input, 'baseball');

    // eslint-disable-next-line max-len
    const submitButton = await screen.findByRole('button', { name: 'search-articles' });
    userEvent.click(submitButton);
    
    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).toMatchSnapshot();    
    
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearchContainer from './NewsSearchContainer';

describe('NewsSearchContainer', () => {
  it('should display a list of news articles', async () => {
    render(<NewsSearchContainer />);

    screen.getByText('Loading...');
  });
});

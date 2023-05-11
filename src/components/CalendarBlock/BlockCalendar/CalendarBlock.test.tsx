import React from 'react';
import { render, screen } from '@testing-library/react';
import CalendarBlock from './CalendarBlock';

test('renders learn react link', () => {
  render(<CalendarBlock />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

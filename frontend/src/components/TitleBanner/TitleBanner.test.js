import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TitleBanner from '.';

test('The title is displayed on screen', () => {
  render(<TitleBanner />);

  const title1 = screen.getByText('Ascendente en FADU');
  const title2 = screen.getByText('RESEÑAS');
  const title3 = screen.getByText('FADU');
  expect(title1).toBeInTheDocument();
  expect(title2).toBeInTheDocument();
  expect(title3).toBeInTheDocument();
});

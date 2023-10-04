import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { getRateLabel, getReviewYearLabel } from '../../helpers';
import MyReview from '.';

const review = {
  year: 2020,
  content:
    'Me dormí unas siestas tremendas en las teóricas pero igual aprobé, no me quejo.',
  rate: 100000,
  id: 0,
};

const deleteOwnReview = jest.fn();

test('The review content is displayed', (done) => {
  render(
    <MyReview
      review={review}
      deleteOwnReview={() => {
        deleteOwnReview();
        expect(deleteOwnReview).toHaveBeenCalledTimes(1);
        done();
      }}
    />,
  );

  const contentText = screen.getByText(review.content);
  expect(contentText).toBeInTheDocument();

  const rateText = screen.getByText(getRateLabel(review.rate), {
    exact: false,
  });
  expect(rateText).toBeInTheDocument();

  const yearText = screen.getByText(getReviewYearLabel(review.year));
  expect(yearText).toBeInTheDocument();

  const deleteButton = screen.getByRole('button');
  userEvent.click(deleteButton);
});

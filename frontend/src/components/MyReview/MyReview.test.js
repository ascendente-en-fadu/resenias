import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import MyReview from '.';
import { getRateLabel, getReviewYearLabel } from '../../helpers';

const review = {
  year: 2020,
  content:
    'Me dormí unas siestas tremendas en las teóricas pero igual aprobé, no me quejo.',
  rate: 100000,
  id: 0,
};

const deleteOwnReview = jest.fn();

test('The review content is displayed', () => {
  render(<MyReview review={review} deleteOwnReview={deleteOwnReview} />);

  const element = screen.getByText(review.content);
  expect(element).toBeInTheDocument();
});

test('The review rate is displayed', () => {
  render(<MyReview review={review} deleteOwnReview={deleteOwnReview} />);

  const element = screen.getByText(getRateLabel(review.rate), {
    exact: false,
  });
  expect(element).toBeInTheDocument();
});

test('The review date is displayed', () => {
  render(<MyReview review={review} deleteOwnReview={deleteOwnReview} />);

  const element = screen.getByText(getReviewYearLabel(review.year));
  expect(element).toBeInTheDocument();
});

// eslint-disable-next-line jest/no-done-callback
test('The review can be deleted', (done) => {
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

  const element = screen.getByRole('button');
  userEvent.click(element);
});

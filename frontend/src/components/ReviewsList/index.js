import React from 'react';
import PropTypes from 'prop-types';

import { NoReviewsIcon } from '../../images';
import { getCurrentYear, mergeStyles } from '../../helpers';
import styles from './styles';
import { REVIEW_YEARS_MAX_COUNT } from '../../constants/misc';

/**
 * Displays a scrollable review list.
 * @param {array} reviews review array to be shown
 */
const ReviewsList = ({ reviews = [] }) => {
  return (
    <>
      {reviews.length > 0 ? (
        <div style={styles.bottom}>
          {reviews.map(({ content, rate, year, id }) => (
            <div style={styles.reviewContainer} key={id}>
              <span style={styles.dataText}>
                {year > getCurrentYear() - REVIEW_YEARS_MAX_COUNT
                  ? 'Cursé en ' + year
                  : 'Cursé hace mucho'}
              </span>
              <span style={styles.contentText}>{content}</span>
              <span style={styles.dataText}>
                {'Nota a la cátedra: ' + rate}{' '}
              </span>
              {id !== reviews[reviews.length - 1]?.id && (
                <div style={styles.divider} />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div style={mergeStyles([styles.bottom, styles.bottomNoReviews])}>
          <NoReviewsIcon width='4em' />
          <span style={styles.noReviewsText}>
            {'Todavía no hay reseñas para esta cátedra :('}
          </span>
        </div>
      )}
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number,
      content: PropTypes.string,
      rate: PropTypes.number,
      id: PropTypes.number,
    }),
  ),
};

export default ReviewsList;

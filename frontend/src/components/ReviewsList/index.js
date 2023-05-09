import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { getRateLabel, getReviewYearLabel, mergeStyles } from '../../helpers';
import styles from './styles';

/**
 * Displays a scrollable review list.
 * @param {array} reviews review array to be shown
 */
const ReviewsList = ({ reviews = [] }) => {
  return (
    <section style={styles.container}>
      {reviews.length > 0 ? (
        <ul style={styles.bottom}>
          {reviews.map(({ content, rate, year, id }) => (
            <li style={styles.reviewContainer} key={id}>
              <h4 style={styles.dataText}>{getReviewYearLabel(year)}</h4>
              <p style={styles.contentText}>{content}</p>
              {getRateLabel(rate) && (
                <h4 style={styles.dataText}>
                  {'Nota a la cátedra: ' + getRateLabel(rate)}
                </h4>
              )}
              {id !== reviews[reviews.length - 1]?.id && (
                <hr style={styles.divider} />
              )}
            </li>
          ))}
        </ul>
      ) : (
        <div style={mergeStyles([styles.bottom, styles.bottomNoReviews])}>
          <Icon name='noReviews' customStyles={styles.noReviewsIcon} />
          <p style={styles.noReviewsText}>
            {'Todavía no hay reseñas para esta cátedra :('}
          </p>
        </div>
      )}
    </section>
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

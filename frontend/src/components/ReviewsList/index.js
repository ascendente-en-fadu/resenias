import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

/**
 * Displays a scrollable review list.
 * @param {array} reviews review array to be shown
 */
const ReviewsList = ({ reviews = [] }) => {
  return (
    <div style={styles.bottom}>
      {reviews.map(({ content, rate, year, id }) => (
        <div style={styles.reviewContainer} key={id}>
          <span style={styles.dataText}>{'Cursé en ' + year}</span>
          <span style={styles.contentText}>{content}</span>
          <span style={styles.dataText}>{'Nota a la cátedra: ' + rate} </span>
          {id !== reviews[reviews.length - 1]?.id && (
            <div style={styles.divider} />
          )}
        </div>
      ))}
    </div>
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

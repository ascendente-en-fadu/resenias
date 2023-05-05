import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';
import { getRateLabel, getReviewYearLabel } from '../../helpers';
import styles from './styles';

/**
 * Box to display the review of the current user and a button to delete it.
 * @param {object} review review object to be shown
 *   @param {number} review.year year when the course was taken
 *   @param {string} review.content review text content
 *   @param {number} review.rate rate value
 *   @param {number} review.id id of the review
 * @param {function} deleteOwnReview function to be called when the delete button is pressed, receiving the review id as an argument
 */
const MyReview = ({ review, deleteOwnReview }) => {
  const reviewRateLabel = getRateLabel(review.rate);
  return (
    <section style={styles.bottom}>
      <CustomButton
        customStyles={{
          container: styles.deleteButtonContainer,
          top: styles.deleteButtonTop,
        }}
        onPress={() => deleteOwnReview(review.id)}
        iconName='delete'
        disableBottom
      />
      <div style={styles.reviewContainer}>
        <h2 style={styles.title}>Tu reseña</h2>
        <h4 style={styles.dataText}>{getReviewYearLabel(review.year)}</h4>
        <p style={styles.contentText}>{review.content}</p>
        {reviewRateLabel && (
          <h4 style={styles.dataText}>
            {'Nota a la cátedra: ' + reviewRateLabel}
          </h4>
        )}
      </div>
    </section>
  );
};

MyReview.propTypes = {
  review: PropTypes.shape({
    year: PropTypes.number,
    content: PropTypes.string,
    rate: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
  deleteOwnReview: PropTypes.func.isRequired,
};

export default MyReview;

import React from 'react';
import PropTypes from 'prop-types';

import { DeleteIcon } from '../../images';
import CustomButton from '../CustomButton';
import { getCurrentYear } from '../../helpers';
import { REVIEW_YEARS_MAX_COUNT } from '../../constants/misc';
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
  return (
    <div style={styles.bottom}>
      <CustomButton
        customStyles={{ bottom: styles.deleteBottom }}
        onPress={() => deleteOwnReview(review.id)}
      >
        <DeleteIcon width='1.5em' />
      </CustomButton>
      <div style={styles.reviewContainer}>
        <span style={styles.title}>Tu reseña</span>
        <span style={styles.dataText}>
          {review.year > getCurrentYear() - REVIEW_YEARS_MAX_COUNT
            ? 'Cursé en ' + review.year
            : 'Cursé hace mucho'}
        </span>
        <span style={styles.contentText}>{review.content}</span>
        <span style={styles.dataText}>
          {'Nota a la cátedra: ' + review.rate}
        </span>
      </div>
    </div>
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

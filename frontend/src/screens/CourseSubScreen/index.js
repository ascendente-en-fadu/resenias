import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, ReviewInput, ReviewsList, MyReview } from '../../components';
import { RATES } from '../../constants/misc';
import { generateYearsList } from '../../helpers';
import styles from './styles';

/**
 * Subscreen that displays all the course data, including other's reviews and (depending on the user) the own review or the box to wirte one.
 * @param {function} sendCurrentReview function to send the currently written review, recieving a review object as an argument
 * @param {function} deleteOwnReview function to delete the review written by the user, taking the review id as an argument
 * @param {array} reviews review list of the current selected course
 * @param {object} ownReview object of the rewiew written by the user
 *   @param {number} ownReview.year year when the course was taken
 *   @param {string} ownReview.content review text content
 *   @param {number} ownReview.rate rate value
 *   @param {number} ownReview.id if of the review
 * @param {number} courseId currently selected course
 */
const CourseSubScreen = ({
  sendCurrentReview,
  deleteOwnReview,
  reviews = [],
  ownReview,
  courseId,
}) => {
  const [year, setYear] = useState();
  const [rate, setRate] = useState();
  const [missingFields, setMissingFields] = useState();

  return (
    <div style={styles.container}>
      {ownReview ? (
        <MyReview review={ownReview} deleteOwnReview={deleteOwnReview} />
      ) : (
        <div style={styles.ownReviewWriteContainer}>
          <div style={styles.title}>Armá tu reseña</div>
          <div style={styles.selectionContainer}>
            <div style={styles.question}>¿En qué año cursaste?</div>
            <Dropdown
              placeholder='Año'
              value={year}
              elements={generateYearsList()}
              onChange={setYear}
              customStyles={{
                container: styles.dropdownContainer,
                list: styles.yearsList,
              }}
              required={missingFields}
            />
          </div>
          <div style={styles.selectionContainer}>
            <div style={styles.question}>Calificá tu experiencia</div>
            <Dropdown
              placeholder='Calificación'
              value={rate}
              elements={RATES}
              onChange={setRate}
              customStyles={{
                container: styles.dropdownContainer,
                list: styles.ratesList,
              }}
              required={missingFields}
            />
          </div>
          <ReviewInput
            onPress={(content) => {
              if (year && rate && content) {
                sendCurrentReview({
                  content: content,
                  year: year.id,
                  ...(rate.id !== -1 && { rate: rate.id }),
                  course: courseId,
                });
              } else {
                setMissingFields(true);
              }
            }}
            required={missingFields}
          />
        </div>
      )}
      <ReviewsList reviews={reviews} />
    </div>
  );
};

CourseSubScreen.propTypes = {
  sendCurrentReview: PropTypes.func.isRequired,
  deleteOwnReview: PropTypes.func.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number,
      content: PropTypes.string,
      rate: PropTypes.number,
      id: PropTypes.number,
    }),
  ),
  ownReview: PropTypes.shape({
    year: PropTypes.number,
    content: PropTypes.string,
    rate: PropTypes.number,
    id: PropTypes.number,
  }),
  courseId: PropTypes.number.isRequired,
};

export default CourseSubScreen;

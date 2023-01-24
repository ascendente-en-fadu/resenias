import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Dropdown, ReviewInput, ReviewsList, MyReview } from '../../components';
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
 */
const CourseSubScreen = ({
  sendCurrentReview,
  deleteOwnReview,
  reviews = [],
  ownReview,
}) => {
  const YEARS = [
    { id: 0, name: '2022' },
    { id: 1, name: '2021' },
    { id: 2, name: '2020' },
    { id: 3, name: '2019' },
    { id: 4, name: '2018' },
  ];
  const RATES = [
    { id: 0, name: 'Sobre nivel' },
    { id: 1, name: 'Nivel' },
    { id: 2, name: 'Bajo nivel' },
    { id: 3, name: 'Ni idea' },
  ];

  const [year, setYear] = useState();
  const [rate, setRate] = useState();

  return (
    <div style={styles.container}>
      {ownReview ? (
        <div style={styles.ownReviewReadContainer}>
          <MyReview review={ownReview} deleteOwnReview={deleteOwnReview} />
        </div>
      ) : (
        <div style={styles.ownReviewWriteContainer}>
          <div style={styles.title}>Armá tu reseña</div>
          <div style={styles.selectionContainer}>
            <div style={styles.question}>¿En qué año cursaste?</div>
            <Dropdown
              placeholder='Año'
              value={year}
              elements={YEARS}
              onChange={setYear}
              customStyles={{ list: styles.yearsList }}
            />
          </div>
          <div style={styles.selectionContainer}>
            <div style={styles.question}>Calificá tu experiencia</div>
            <Dropdown
              placeholder='Calificación'
              value={rate}
              elements={RATES}
              onChange={setRate}
              customStyles={{ list: styles.ratesList }}
            />
          </div>
          <div style={styles.reviewInputContainer}>
            <ReviewInput
              onPress={(content) => {
                sendCurrentReview({ content: content, year: year, rate: rate });
              }}
            />
          </div>
        </div>
      )}
      <ReviewsList reviews={reviews} />
    </div>
  );
};

CourseSubScreen.propTypes = {
  sendCurrentReview: PropTypes.func,
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
  }),
  deleteOwnReview: PropTypes.func,
};

export default CourseSubScreen;

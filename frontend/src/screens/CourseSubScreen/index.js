import React, { useState } from 'react';

import { Dropdown, ReviewInput, ReviewsList, MyReview } from '../../components';
import styles from './styles';

/**
 * Subscreen that displays all the course data, including other's reviews and (depending on the user) the own review or the box to wirte one.
 */
const CourseSubScreen = () => {
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

  /*const OWN_REVIEW_DATA = {
    content: 'Esta reseña la escribí yo, porque soy el más capo.',
    year: '2025',
    rate: 'Sobre nivel',
  };*/
  const OWN_REVIEW_DATA = undefined;
  const [year, setYear] = useState();
  const [rate, setRate] = useState();

  return (
    <div style={styles.container}>
      {OWN_REVIEW_DATA ? (
        <div style={styles.ownReviewReadContainer}>
          <MyReview />
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
            <ReviewInput />
          </div>
        </div>
      )}
      <ReviewsList />
    </div>
  );
};

export default CourseSubScreen;

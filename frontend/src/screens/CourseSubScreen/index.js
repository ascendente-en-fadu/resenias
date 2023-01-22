import React, { useState } from 'react';

import { Dropdown, ReviewInput, ReviewsList, MyReview } from '../../components';
import styles from './styles';

/**
 *
 */
const CourseSubScreen = () => {
  const YEARS = ['2022', '2021', '2020', '2019', '2018', '2017'];
  const RATES = ['Sobre nivel', 'Nivel', 'Bajo nivel', 'Ni idea'];
  const OWN_REVIEW_DATA = {
    content: 'Esta reseña la escribí yo, porque soy el más capo.',
    year: '2025',
    rate: 'Sobre nivel',
  };
  const [year, setYear] = useState('Año');
  const [rate, setRate] = useState('Calificación');

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
              value={year}
              elements={YEARS}
              onChange={setYear}
              customStyles={{ list: styles.yearsList }}
            />
          </div>
          <div style={styles.selectionContainer}>
            <div style={styles.question}>Calificá tu experiencia</div>
            <Dropdown
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

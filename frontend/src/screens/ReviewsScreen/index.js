import React from 'react';

import { CourseSelector, Footer } from '../../components';
import styles from './styles';

/**
 * Reviews screen that shows the course selector and the course information.
 */
const ReviewsScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.selectorContainer}>
        <CourseSelector />
      </div>
      <div style={styles.censorshipAdvice}>
        Ojito con las reseñas que escribís que si te vas de boca las borro.
        Podés usar palabrotas pero mantené el respeto.
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsScreen;

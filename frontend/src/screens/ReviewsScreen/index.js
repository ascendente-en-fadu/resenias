import React from 'react';

import { CourseSelector, Footer } from '../../components';
import NoCourseSubScreen from '../NoCourseSubScreen';
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
      <div style={styles.subScreenContainer}>
        <NoCourseSubScreen />
      </div>
      <Footer />
    </div>
  );
};

export default ReviewsScreen;

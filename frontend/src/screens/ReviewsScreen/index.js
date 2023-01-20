import React from 'react';
import PropTypes from 'prop-types';

import { CourseSelector, Footer } from '../../components';
import NoCourseSubScreen from '../NoCourseSubScreen';
import styles from './styles';

/**
 * Reviews screen that shows the course selector and the course information.
 * @param {string} carreer carreer name to display on top
 * @param {function} goBack function to be called when the carreer indicator is pressed
 */
const ReviewsScreen = ({ carreer, goBack }) => {
  return (
    <div style={styles.container}>
      <div style={styles.selectorContainer}>
        <CourseSelector carreer={carreer} goBack={goBack} />
      </div>
      <div style={styles.subScreenContainer}>
        <NoCourseSubScreen />
      </div>
      <Footer />
    </div>
  );
};

ReviewsScreen.propTypes = {
  carreer: PropTypes.string,
  goBack: PropTypes.function,
};

export default ReviewsScreen;

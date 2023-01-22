import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CourseSelector, Footer } from '../../components';
import NoCourseSubScreen from '../NoCourseSubScreen';
import styles from './styles';
import CourseSubScreen from '../CourseSubScreen';

/**
 * Reviews screen that shows the course selector and the course information.
 * @param {object} carreer
 *   @param {string} carreer.name name of the current selected carreer
 *   @param {number} carreer.id id of the current selected carreer
 * @param {function} goBack function to be called when the carreer indicator is pressed
 */
const ReviewsScreen = ({ carreer = {}, goBack }) => {
  const [selectedCourseData, setSelectedCourseData] = useState();
  return (
    <div style={styles.container}>
      <div style={styles.selectorContainer}>
        <CourseSelector
          carreer={carreer.name}
          goBack={goBack}
          setSelectedCourseData={setSelectedCourseData}
        />
      </div>
      <div style={styles.subScreenContainer}>
        {selectedCourseData?.course ? (
          <CourseSubScreen />
        ) : (
          <NoCourseSubScreen />
        )}
      </div>
      <Footer />
    </div>
  );
};

ReviewsScreen.propTypes = {
  carreer: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  goBack: PropTypes.func,
};

export default ReviewsScreen;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CourseSelector, Footer } from '../../components';
import NoCourseSubScreen from '../NoCourseSubScreen';
import CourseSubScreen from '../CourseSubScreen';
import { getCourses, getSubjects } from '../../helpers';
import styles from './styles';

/**
 * Reviews screen that shows the course selector and the course information.
 * @param {object} carreer
 *   @param {string} carreer.name name of the current selected carreer
 *   @param {number} carreer.id id of the current selected carreer
 * @param {function} goBack function to be called when the carreer indicator is pressed
 */
const ReviewsScreen = ({ carreer = {}, goBack }) => {
  const [subject, setSubject] = useState();
  const [course, setCourse] = useState();
  const [subjects, setSubjects] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    /**
     * Gets the subjects list
     */
    const getSubjectsList = async () => {
      try {
        const response = await getSubjects(carreer.id);
        setSubjects(response);
      } catch (error) {
        console.log(error);
      }
    };

    getSubjectsList();
  }, [carreer]);

  useEffect(() => {
    /**
     * Gets the courses list
     */
    const getCoursesList = async () => {
      try {
        const response = await getCourses(subject.id);
        setCourses(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (subject) {
      getCoursesList();
    }
  }, [subject]);

  return (
    <div style={styles.container}>
      <div style={styles.selectorContainer}>
        <CourseSelector
          subjects={subjects}
          courses={courses}
          subject={subject}
          course={course}
          carreer={carreer}
          goBack={goBack}
          setCourse={setCourse}
          setSubject={setSubject}
        />
      </div>
      <div style={styles.subScreenContainer}>
        {course ? <CourseSubScreen /> : <NoCourseSubScreen />}
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

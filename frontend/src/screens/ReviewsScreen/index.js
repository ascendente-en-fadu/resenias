import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CourseSelector, Footer } from '../../components';
import NoCourseSubScreen from '../NoCourseSubScreen';
import CourseSubScreen from '../CourseSubScreen';
import {
  deleteReview,
  getCourseInfo,
  getCourses,
  getSubjects,
  sendReview,
} from '../../helpers';
import styles from './styles';

/**
 * Reviews screen that shows the course selector, the course information and the review write input.
 * @param {object} carreer current selected carreer
 *   @param {string} carreer.name name of the current selected carreer
 *   @param {number} carreer.id id of the current selected carreer
 * @param {function} goBack function to be called when the carreer indicator is pressed
 */
const ReviewsScreen = ({ carreer, goBack }) => {
  const [subject, setSubject] = useState();
  const [course, setCourse] = useState();
  const [subjects, setSubjects] = useState();
  const [courses, setCourses] = useState();
  const [courseInfo, setCourseInfo] = useState();

  /**
   * Sets the current selected course and removes the previously course information
   */
  const _setCourse = (value) => {
    setCourse(value);
    setCourseInfo(undefined);
  };

  /**
   * Sets the current selected subject and removes the previously selected course, the course list, and the course info
   */
  const _setSubject = (value) => {
    setSubject(value);
    setCourse(undefined);
    setCourses(undefined);
    setCourseInfo(undefined);
  };

  useEffect(() => {
    /**
     * Gets the subjects list from BE and saves it to local state
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
     * Gets the courses list for a given subject from BE and saves it to local state
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

  useEffect(() => {
    /**
     * Gets the reviews list for a given course from BE and saves it to local state
     */
    const getReviewsList = async () => {
      try {
        const response = await getCourseInfo(course.id);
        setCourseInfo(response);
      } catch (error) {
        console.log(error);
      }
    };
    if (course) {
      getReviewsList();
    }
  }, [course]);

  /**
   * Sends a review written by the user to BE and refreshes the course info
   * @param {object} review review object to be sent
   *   @param {number} review.year year when the course was taken
   *   @param {string} review.content review text content
   *   @param {number} review.rate rate value
   */
  const sendCurrentReview = async (review) => {
    try {
      setCourseInfo(undefined);
      await sendReview(review);
    } catch (error) {
      console.log(error);
    } finally {
      try {
        const response = await getCourseInfo(course.id);
        setCourseInfo(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  /**
   * Deletes the review written by the user on BE and refreshes the course info
   * @param {number} reviewId id of the review to be deleted
   */
  const deleteOwnReview = async (reviewId) => {
    try {
      setCourseInfo(undefined);
      await deleteReview(reviewId);
    } catch (error) {
      console.log(error);
    } finally {
      try {
        const response = await getCourseInfo(course.id);
        setCourseInfo(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          setCourse={_setCourse}
          setSubject={_setSubject}
        />
      </div>
      <div style={styles.subScreenContainer}>
        {course && courseInfo ? (
          <CourseSubScreen
            sendCurrentReview={sendCurrentReview}
            reviews={courseInfo.reviews}
            ownReview={courseInfo.own_review}
            deleteOwnReview={deleteOwnReview}
          />
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
  }).isRequired,
  goBack: PropTypes.func.isRequired,
};

export default ReviewsScreen;

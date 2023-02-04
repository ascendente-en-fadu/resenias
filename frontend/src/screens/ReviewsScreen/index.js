import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CourseSelector, Footer, FullScreenModal } from '../../components';
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
 * @param {string} currentUser currently logged user email
 */
const ReviewsScreen = ({ carreer, goBack, currentUser }) => {
  const [subject, setSubject] = useState();
  const [course, setCourse] = useState();
  const [subjects, setSubjects] = useState();
  const [courses, setCourses] = useState();
  const [courseInfo, setCourseInfo] = useState();
  const [showModal, setShowModal] = useState();
  const [modalData, setModalData] = useState({});

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
    const controller = new AbortController();
    /**
     * Gets the subjects list from BE and saves it to local state
     */
    const getSubjectsList = async () => {
      try {
        const response = await getSubjects(carreer.id, controller);
        setSubjects(response);
      } catch (error) {
        error && console.log(error);
      }
    };

    getSubjectsList();
    return () => controller.abort();
  }, [carreer]);

  useEffect(() => {
    const controller = new AbortController();
    /**
     * Gets the courses list for a given subject from BE and saves it to local state
     */
    const getCoursesList = async () => {
      try {
        const response = await getCourses(subject.id, controller);
        setCourses(response);
      } catch (error) {
        error && console.log(error);
      }
    };

    if (subject) {
      getCoursesList();
    }
    return () => controller.abort();
  }, [subject]);

  useEffect(() => {
    const controller = new AbortController();
    /**
     * Gets the reviews list for a given course from BE and saves it to local state
     */
    const getReviewsList = async () => {
      try {
        const response = await getCourseInfo(
          course.id,
          currentUser,
          controller,
        );
        setCourseInfo(response);
      } catch (error) {
        error && console.log(error);
      }
    };

    if (course) {
      getReviewsList();
    }
    return () => controller.abort();
  }, [course]);

  /**
   * Sends a review written by the user to BE and refreshes the course info
   * @param {object} review review object to be sent
   *   @param {number} review.year year when the course was taken
   *   @param {string} review.content review text content
   *   @param {number} review.rate rate value
   */
  const sendCurrentReview = async (review) => {
    setModalData({
      onConfirm: async () => {
        await sendReview(review, currentUser);
      },
      onResultConfirm: async () => {
        setCourseInfo(undefined);
        const response = await getCourseInfo(course.id);
        setCourseInfo(response);
      },
      questionText:
        '¿Mandamos esta reseña, master? Igual si te mandaste una cagada podés borrarla y escribir otra.',
      errorText: 'No pudimos guardar tu reseña.',
      successText: 'Tu reseña se guardó con éxito.',
    });
    setShowModal(true);
  };

  /**
   * Deletes the review written by the user on BE and refreshes the course info
   * @param {number} reviewId id of the review to be deleted
   */
  const deleteOwnReview = async (reviewId) => {
    setModalData({
      onConfirm: async () => {
        await deleteReview(reviewId, currentUser);
      },
      onResultConfirm: async () => {
        setCourseInfo(undefined);
        const response = await getCourseInfo(course.id);
        setCourseInfo(response);
      },
      questionText:
        '¿Querés borrar la reseña, master? Igual no pasa nada, vas a poder escribir una reseña nueva.',
      errorText: 'No pudimos borrar tu reseña.',
      successText: 'Tu reseña se borró con éxito.',
    });
    setShowModal(true);
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
      {showModal && (
        <FullScreenModal
          text={modalData.text}
          onConfirm={modalData.onConfirm}
          onResultConfirm={modalData.onResultConfirm}
          questionText={modalData.questionText}
          errorText={modalData.errorText}
          successText={modalData.successText}
          onClose={() => {
            setShowModal(false);
            setModalData({});
          }}
        />
      )}
    </div>
  );
};

ReviewsScreen.propTypes = {
  carreer: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  goBack: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
};

export default ReviewsScreen;

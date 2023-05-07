import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  CourseSelector,
  MyReview,
  ReviewInput,
  ReviewsList,
} from '../../components';
import {
  deleteReview,
  getCourseInfo,
  getCourses,
  getSubjects,
  sendReview,
} from '../../helpers';
import {
  selectCourse,
  selectSubject,
  setCourseInfo,
  setCoursesList,
  setSubjectsList,
  unselectCareer,
  unsetCourseInfo,
} from '../../redux';
import { ModalContext } from '../../context';
import styles from './styles';

/**
 * Reviews screen that shows the course selector, the course information and the review write input.
 */
const ReviewsScreen = () => {
  const sessionId = useSelector((state) => state.session.sessionId);
  const careers = useSelector((state) => state.reviews.careers);
  const subjects = useSelector((state) => state.reviews.subjects);
  const courses = useSelector((state) => state.reviews.courses);
  const courseInfo = useSelector((state) => state.reviews.courseInfo);
  const dispatch = useDispatch();
  const modal = useContext(ModalContext);

  useEffect(() => {
    const controller = new AbortController();
    /**
     * Gets the subjects list from BE and saves it to local state
     */
    const getSubjectsList = async () => {
      try {
        const response = await getSubjects(careers.selected.id, controller);
        dispatch(setSubjectsList(response));
      } catch (error) {
        error && console.log(error);
      }
    };

    getSubjectsList();
    return () => controller.abort();
  }, [careers.selected]);

  useEffect(() => {
    const controller = new AbortController();
    /**
     * Gets the courses list for a given subject from BE and saves it to local state
     */
    const getCoursesList = async () => {
      try {
        const response = await getCourses(subjects.selected.id, controller);
        dispatch(setCoursesList(response));
      } catch (error) {
        error && console.log(error);
      }
    };

    if (subjects.selected) {
      getCoursesList();
    }
    return () => controller.abort();
  }, [subjects.selected]);

  useEffect(() => {
    const controller = new AbortController();
    /**
     * Gets the reviews list for a given course from BE and saves it to local state
     */
    const getReviewsList = async () => {
      try {
        const response = await getCourseInfo(
          courses.selected.id,
          sessionId,
          controller,
        );
        dispatch(setCourseInfo(response));
      } catch (error) {
        error && console.log(error);
      }
    };

    if (courses.selected) {
      getReviewsList();
    }
    return () => controller.abort();
  }, [courses.selected]);

  /**
   * Sends a review written by the user to BE and refreshes the course info
   * @param {object} review review object to be sent
   *   @param {number} review.year year when the course was taken
   *   @param {string} review.content review text content
   *   @param {number} review.rate rate value
   *   @param {number} review.course course id
   */
  const sendCurrentReview = async (review) => {
    modal.setModalData({
      onConfirm: async () => {
        await sendReview(review, sessionId);
      },
      onResultConfirm: async () => {
        dispatch(unsetCourseInfo());
        const response = await getCourseInfo(courses.selected.id, sessionId);
        dispatch(setCourseInfo(response));
      },
      questionText:
        '¿Mandamos esta reseña, máquina? Igual si te mandaste una cagada podés borrarla y escribir otra.',
      errorText: 'No pudimos guardar tu reseña.',
      successText: 'Tu reseña se guardó con éxito.',
    });
  };

  /**
   * Deletes the review written by the user on BE and refreshes the course info
   * @param {number} reviewId id of the review to be deleted
   */
  const deleteOwnReview = async (reviewId) => {
    modal.setModalData({
      onConfirm: async () => {
        await deleteReview(reviewId, sessionId);
      },
      onResultConfirm: async () => {
        dispatch(unsetCourseInfo());
        const response = await getCourseInfo(courses.selected.id, sessionId);
        dispatch(setCourseInfo(response));
      },
      questionText:
        '¿Querés borrar la reseña, máquina? Igual no pasa nada, vas a poder escribir una reseña nueva.',
      errorText: 'No pudimos borrar tu reseña.',
      successText: 'Tu reseña se borró con éxito.',
    });
  };

  return (
    <>
      <CourseSelector
        subjects={subjects.list}
        courses={courses.list}
        subject={subjects.selected}
        course={courses.selected}
        career={careers.selected}
        goBack={() => dispatch(unselectCareer())}
        setCourse={(payload) => dispatch(selectCourse(payload))}
        setSubject={(payload) => dispatch(selectSubject(payload))}
      />
      {courses.selected && courseInfo ? (
        <main style={styles.reviews}>
          {courseInfo.own_review ? (
            <MyReview
              review={courseInfo.own_review}
              deleteOwnReview={deleteOwnReview}
            />
          ) : (
            <ReviewInput
              sendCurrentReview={sendCurrentReview}
              courseId={courses.selected.id}
            />
          )}
          <ReviewsList reviews={courseInfo.reviews} />
        </main>
      ) : (
        <p style={styles.censorshipAdviceContainer}>
          Ojito con las reseñas que escribís que si te vas de boca las borro.
          Podés usar palabrotas pero mantené el respeto.
        </p>
      )}
    </>
  );
};

export default ReviewsScreen;

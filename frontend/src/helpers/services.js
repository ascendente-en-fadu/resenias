import axios from 'axios';

import { MOCK_URL } from '../constants/misc';

const axiosInstance = axios.create({ baseURL: MOCK_URL, timeout: 15000 });

/**
 * Gets the carreers list
 * @returns a carreers list
 */
export const getCarreers = async () => {
  const { data } = await axiosInstance.get('/get-carreers');
  return data;
};

/**
 * Gets the subjects list for a given carreer
 * @param {number} carreerId id of the carreer to get it's subjects
 * @returns a subjects list
 */
export const getSubjects = async (carreerId) => {
  const { data } = await axiosInstance.get('/get-subjects', {
    params: { carreer: carreerId },
  });
  return data[0].subjects;
};

/**
 * Gets the courses list for a given subject
 * @param {number} subjectId id of the subject to get it's courses
 * @returns a courses list
 */
export const getCourses = async (subjectId) => {
  const { data } = await axiosInstance.get('/get-courses', {
    params: { subject: subjectId },
  });
  return data[0].courses;
};

/**
 * Sends a review written by the user
 * @param {object} review review object to be sent
 *   @param {number} review.year year when the course was taken
 *   @param {string} review.content review text content
 *   @param {number} review.rate rate value
 */
export const sendReview = async (review) => {
  // TODO change method to POST when working with the real BE
  await axiosInstance.get('/create-review', {
    params: { review: review },
  });
};

/**
 * Gets the course info for a given course
 * @param {number} courseId id of the course to get it's information
 * @returns a course information object
 */
export const getCourseInfo = async (courseId) => {
  const { data } = await axiosInstance.get('/get-course-info', {
    params: { course: courseId },
  });
  return data[0];
};

/**
 * Delete a review previously written by the user
 * @param {number} reviewId id of the review to be deleted
 */
export const deleteReview = async (reviewId) => {
  // TODO change method to DELETE when working with the real BE
  await axiosInstance.get('/delete-review', {
    params: { id: reviewId },
  });
};

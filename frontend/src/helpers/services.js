/* eslint-disable no-unused-vars */
import axios from 'axios';

import { BASE_URL } from '../constants/misc';
import {
  careersResponse,
  careersUrl,
  courseInfoParams,
  courseInfoResponse,
  coursesParams,
  coursesResponse,
  coursesUrl,
  deleteReviewParams,
  deleteReviewUrl,
  loginResponse,
  loginUrl,
  loginBody,
  sendReviewBody,
  sendReviewUrl,
  subjectsParams,
  subjectsResponse,
  subjectsUrl,
  reviewsUrl,
  ownReviewUrl,
} from './apiTranslations';

const axiosInstance = axios.create({ baseURL: BASE_URL, timeout: 15000 });

axiosInstance.interceptors.request.use((req) => {
  console.log('Request ' + req.url);
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    console.log('Response ' + res.config.url);
    return res;
  },
  (err) => {
    if (err.code === 'ERR_CANCELED') {
      console.log('Canceled ' + err.config.url);
      return Promise.reject(undefined);
    }
    return Promise.reject(err);
  },
);

/**
 * Gets the careers list
 * @param {AbortController} controller controller to abort the request
 * @returns a careers list
 */
export const getCareers = async (controller) => {
  const { data } = await axiosInstance.get(careersUrl(), {
    signal: controller?.signal,
  });
  return careersResponse(data);
};

/**
 * Gets the subjects list for a given career
 * @param {number} careerId id of the career to get it's subjects
 * @param {AbortController} controller controller to abort the request
 * @returns a subjects list
 */
export const getSubjects = async (careerId, controller) => {
  const { data } = await axiosInstance.get(subjectsUrl(), {
    params: subjectsParams({ career: careerId }),
    signal: controller?.signal,
  });
  return subjectsResponse(data);
};

/**
 * Gets the courses list for a given subject
 * @param {number} subjectId id of the subject to get it's courses
 * @param {AbortController} controller controller to abort the request
 * @returns a courses list
 */
export const getCourses = async (subjectId, controller) => {
  const { data } = await axiosInstance.get(coursesUrl(), {
    params: coursesParams({ subject: subjectId }),
    signal: controller?.signal,
  });
  return coursesResponse(data);
};

/**
 * Gets the course info for a given course
 * @param {number} courseId id of the course to get it's information
 * @param {string} sessionId session id of the current user
 * @param {AbortController} controller controller to abort the request
 * @returns a course information object
 */
export const getCourseInfo = async (courseId, sessionId, controller) => {
  const reviewsResponse = await axiosInstance.get(reviewsUrl(), {
    params: courseInfoParams({ course: courseId }),
    headers: {
      'Session-Id': sessionId,
    },
    signal: controller?.signal,
  });
  const ownReviewResponse = await axiosInstance.get(ownReviewUrl(), {
    params: courseInfoParams({ course: courseId }),
    headers: {
      'Session-Id': sessionId,
    },
    signal: controller?.signal,
  });
  return courseInfoResponse(reviewsResponse.data, ownReviewResponse.data);
};

/**
 * Sends a review written by the user
 * @param {object} review review object to be sent
 *   @param {number} review.year year when the course was taken
 *   @param {string} review.content review text content
 *   @param {number} review.rate rate value
 *   @param {number} review.course course id
 * @param {string} sessionId session id of the current user
 */
export const sendReview = async (review, sessionId) => {
  await axiosInstance.post(
    sendReviewUrl(),
    sendReviewBody({ review: review }),
    {
      headers: {
        'Session-Id': sessionId,
      },
    },
  );
};

/**
 * Delete a review previously written by the user
 * @param {number} reviewId id of the review to be deleted
 * @param {string} sessionId session id of the current user
 */
export const deleteReview = async (reviewId, sessionId) => {
  await axiosInstance.delete(deleteReviewUrl(reviewId), {
    params: deleteReviewParams({ id: reviewId }),
    headers: {
      'Session-Id': sessionId,
    },
  });
};

/**
 * Do a login on BE by sending the access token given by the Google Login
 * @param {string} accessToken currently logged user access token
 * @returns a session id, to authenticate the user for the necessary requests
 */
export const doLogin = async (accessToken) => {
  const { data } = await axiosInstance.post(
    loginUrl(),
    loginBody({ access_token: accessToken }),
  );
  return loginResponse(data);
};

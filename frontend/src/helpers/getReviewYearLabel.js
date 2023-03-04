import { REVIEW_YEARS_MAX_COUNT } from '../constants/misc';
import { getCurrentYear } from './getCurrentYear';

/**
 * @param {number} year the year of the review
 * @returns the label to show to the user for the specified year
 */
export const getReviewYearLabel = (year) => {
  return year > getCurrentYear() - REVIEW_YEARS_MAX_COUNT
    ? 'Cursé en ' + year
    : 'Cursé hace mucho';
};

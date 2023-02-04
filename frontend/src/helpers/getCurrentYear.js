import { VALID_YEAR_MONTH_LIMIT } from '../constants/misc';

/**
 * @returns the year of the last class period
 */
export const getCurrentYear = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  return month < VALID_YEAR_MONTH_LIMIT ? year - 1 : year;
};

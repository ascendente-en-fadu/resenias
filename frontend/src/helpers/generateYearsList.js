import { REVIEW_YEARS_MAX_COUNT } from '../constants/misc';
import { getCurrentYear } from './getCurrentYear';

/**
 * @returns an object with 6 valid year options in a Dropdown-friendly format
 */
export const generateYearsList = () => {
  const currentYear = getCurrentYear();
  const yearsArray = Array.from(
    new Array(REVIEW_YEARS_MAX_COUNT),
    (x, i) => currentYear - i,
  );
  const yearObjectsArray = yearsArray.map((x) => {
    return { id: x, name: String(x) };
  });
  return [...yearObjectsArray, { id: 2000, name: 'Hace mucho' }];
};

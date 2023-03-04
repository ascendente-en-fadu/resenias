import { RATES } from '../constants/misc';

/**
 * @param {number} rate the rate of the review
 * @returns the label to show to the user for the specified rate
 */
export const getRateLabel = (rate) => {
  const rateObject = RATES.filter((obj) => obj.id === rate);
  return rateObject[0] && rateObject[0].name;
};

/**
 * Function to merge an array of style objects into a single one, giving precedence to the last ones.
 */
export const mergeStyles = (stylesArray) => {
  return Object.assign({}, ...stylesArray);
};

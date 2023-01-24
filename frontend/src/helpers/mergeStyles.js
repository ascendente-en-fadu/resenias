/**
 * Function to merge an array of style objects into a single one, giving precedence to the last ones.
 * @param {array} stylesArray array with style objects to merge
 * @returns an object with the merges styles
 */
export const mergeStyles = (stylesArray) => {
  return Object.assign({}, ...stylesArray);
};

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

/**
 *
 * @param {*} param0
 * @returns
 */
const Button = ({ text }) => {
  return (
    <button style={styles.buttonDefault}>
      <span style={styles.btnText}>{text}</span>
      <div style={styles.shadow} />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;

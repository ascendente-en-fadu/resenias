import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

/**
 * Career selection button, composed by a nearly squared button with fixed width and height.
 * @param {string} text buttont text
 */
const CarreerButton = ({ text }) => {
  return (
    <button style={styles.buttonBottom}>
      <div style={styles.buttonTop}>
        <span style={styles.text}>{text}</span>
      </div>
    </button>
  );
};

CarreerButton.propTypes = {
  text: PropTypes.string,
};

export default CarreerButton;

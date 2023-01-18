import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

/**
 * Career selection button, composed by a nearly squared button with fixed width and height.
 * @param {string} text buttont text
 */
const CarreerButton = ({ text }) => {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      style={styles.buttonBottom}
      onMouseDown={() => setAnimate(true)}
      onMouseUp={() => setAnimate(false)}
      onTouchStart={() => setAnimate(true)}
      onTouchEnd={() => setAnimate(false)}
    >
      <div
        style={{
          ...styles.buttonTop,
          ...(animate ? styles.buttonPressed : {}),
        }}
      >
        <span style={styles.text}>{text}</span>
      </div>
    </button>
  );
};

CarreerButton.propTypes = {
  text: PropTypes.string,
};

export default CarreerButton;

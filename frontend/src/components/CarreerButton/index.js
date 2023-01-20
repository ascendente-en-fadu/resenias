import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { mergeStyles } from '../../helpers';
import styles from './styles';

/**
 * Career selection button, with a centered text and a press animation.
 * @param {string} text buttont text
 * @param {object} customStyles
 *   @param {object} customStyles.top custom styles for the top layer of the button
 *   @param {object} customStyles.bottom custom styles for the bottom layer of the button
 */
const CarreerButton = ({ text, customStyles = {} }) => {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      style={mergeStyles([styles.buttonBottom, customStyles.bottom])}
      onMouseDown={() => setAnimate(true)}
      onMouseUp={() => setAnimate(false)}
      onTouchStart={() => setAnimate(true)}
      onMouseLeave={() => {
        if (animate) {
          setAnimate(false);
        }
      }}
    >
      <div
        style={mergeStyles([
          styles.buttonTop,
          customStyles.top,
          animate && styles.buttonPressed,
        ])}
      >
        <span style={styles.text}>{text}</span>
      </div>
    </button>
  );
};

CarreerButton.propTypes = {
  text: PropTypes.string,
  customStyles: PropTypes.shape({
    bottom: PropTypes.object,
    top: PropTypes.object,
  }),
};

export default CarreerButton;

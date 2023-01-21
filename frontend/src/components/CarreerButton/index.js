import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
import { mergeStyles } from '../../helpers';
import styles from './styles';

/**
 * Career selection button, with a centered text and a press animation.
 * @param {string} text buttont text
 * @param {object} customStyles
 *   @param {object} customStyles.top custom styles for the top layer of the button
 *   @param {object} customStyles.bottom custom styles for the bottom layer of the button
 *   @param {object} customStyles.text custom styles for the button text
 * @param {function} onPress function to be called when the button in pressed, passing it's text as argument
 * @param {bool} arrow if true, displays an arrow icon on the right of the button
 */
const CarreerButton = ({ text, customStyles = {}, onPress, arrow }) => {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      style={mergeStyles([styles.buttonBottom, customStyles.bottom])}
      onMouseDown={() => {
        setAnimate(true);
        onPress(text);
      }}
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
        {arrow && <ArrowIcon width='3em' style={styles.arrow} />}
        <span style={mergeStyles([styles.text, customStyles.text])}>
          {text}
        </span>
      </div>
    </button>
  );
};

CarreerButton.propTypes = {
  text: PropTypes.string,
  customStyles: PropTypes.shape({
    bottom: PropTypes.object,
    top: PropTypes.object,
    text: PropTypes.object,
  }),
  onPress: PropTypes.func,
  arrow: PropTypes.bool,
};

export default CarreerButton;

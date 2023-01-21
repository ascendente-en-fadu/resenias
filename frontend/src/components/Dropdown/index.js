/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as ArrowIcon } from '../../images/arrow.svg';
import { mergeStyles } from '../../helpers';
import styles from './styles';

/**
 * Dropdown with a list of elements to choose.
 * @param {object} customStyles
 *   @param {object} customStyles.list custom styles for the list container
 *   @param {object} customStyles.bottom custom styles for the bottom layer of the button
 * @param {function} onChange callback to be called when an element is selected
 * @param {string} value current selected value
 * @param {boolean} disabled if true, the dropdown is disabled
 * @param {array} elements elements array to be displayed in the list
 */
const Dropdown = ({
  customStyles = {},
  onChange,
  value,
  disabled,
  elements = [],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  return (
    <div style={mergeStyles([styles.buttonBottom, customStyles.bottom])}>
      <button
        disabled={disabled}
        style={mergeStyles([styles.buttonTop, animate && styles.buttonPressed])}
        onMouseDown={() => !disabled && setAnimate(true)}
        onMouseUp={() => {
          setAnimate(false);
          setIsOpen((prev) => !prev);
        }}
        onMouseLeave={() => {
          if (animate) {
            setAnimate(false);
            setIsOpen((prev) => !prev);
          }
        }}
        onTouchStart={() => !disabled && setAnimate(true)}
      >
        <span
          style={mergeStyles([styles.text, disabled && styles.disabledText])}
        >
          {value}
        </span>
        <ArrowIcon width='1.5em' />
      </button>
      <div
        style={mergeStyles([
          styles.list,
          customStyles.list,
          isOpen && styles.listOpen,
        ])}
      >
        {elements.map((text) => (
          <button
            style={styles.items}
            key={text}
            onMouseDown={() => {
              onChange(text);
              setAnimate(false);
              setIsOpen((prev) => !prev);
            }}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  text: PropTypes.string,
  customStyles: PropTypes.shape({
    bottom: PropTypes.object,
    list: PropTypes.object,
  }),
  onChange: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  elements: PropTypes.arrayOf(PropTypes.string),
};

export default Dropdown;

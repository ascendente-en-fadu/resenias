import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { mergeStyles } from '../../helpers';
import { ArrowIcon } from '../../images';
import styles from './styles';

/**
 * Dropdown that displays a list of elements to choose from.
 * @param {object} customStyles
 *   @param {object} customStyles.list custom styles for the list container
 *   @param {object} customStyles.bottom custom styles for the bottom layer of the button
 * @param {function} onChange function to be called when an element is clicked, taking the element as an argument
 * @param {object} value current selected value
 *   @param {string} value.name current selected value name to be shown
 * @param {boolean} disabled if true, the dropdown is not interactable
 * @param {array} elements elements array to be displayed in the list
 * @param {string} placeholder text to be shown when no option is selected
 */
const Dropdown = ({
  customStyles = {},
  onChange,
  value,
  disabled,
  elements = [],
  placeholder,
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
          {value?.name ?? placeholder}
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
        {elements.map((element) => (
          <button
            style={styles.items}
            key={element.id}
            onMouseDown={() => {
              onChange(element);
              setAnimate(false);
              setIsOpen((prev) => !prev);
            }}
          >
            {element.name}
          </button>
        ))}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  customStyles: PropTypes.shape({
    bottom: PropTypes.object,
    list: PropTypes.object,
  }),
  onChange: PropTypes.func,
  value: PropTypes.shape({
    name: PropTypes.string,
  }),
  disabled: PropTypes.bool,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
};

export default Dropdown;

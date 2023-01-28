import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { mergeStyles, onPressEvents } from '../../helpers';
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
 *   @param {number} value.id unique id of the current selected value
 * @param {bool} disabled if true, the dropdown is not interactable
 * @param {array} elements elements array to be displayed in the list
 * @param {string} placeholder text to be shown when no option is selected
 * @param {bool} required if there is no option selected, displays a warning style
 */
const Dropdown = ({
  customStyles = {},
  onChange,
  value,
  disabled,
  elements = [],
  placeholder,
  required,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef?.current) return;
    /**
     * If the target element of the event is part of the dropdown, hides the item list.
     */
    const handleClick = (evt) => {
      if (!rootRef.current.contains(evt.target) && isOpen) {
        setIsOpen(false);
        setAnimate(false);
      }
    };
    document.addEventListener(`mouseup`, handleClick);
    return () => {
      document.removeEventListener(`mouseup`, handleClick);
    };
  }, [rootRef, isOpen]);

  return (
    <div
      style={mergeStyles([styles.buttonBottom, customStyles.bottom])}
      ref={rootRef}
    >
      <button
        disabled={disabled}
        style={mergeStyles([
          styles.buttonTop,
          animate && styles.buttonPressed,
          required && !value && styles.requiredStyle,
        ])}
        {...onPressEvents({
          start: () => !disabled && setAnimate(true),
          end: () => {
            setAnimate(false);
            setIsOpen((prev) => !prev);
          },
          cancel: () => animate && setAnimate(false),
        })}
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
            {...onPressEvents({
              end: () => {
                if (element.id !== value?.id) onChange(element);
                setAnimate(false);
                setIsOpen((prev) => !prev);
              },
            })}
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  disabled: PropTypes.bool,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  required: PropTypes.bool,
};

export default Dropdown;

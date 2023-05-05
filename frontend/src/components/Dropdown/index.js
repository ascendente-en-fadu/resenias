import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { mergeStyles, onPressEvents } from '../../helpers';
import CustomButton from '../CustomButton';
import styles from './styles';

/**
 * Dropdown that displays a list of elements to choose from.
 * @param {object} customStyles
 *   @param {object} customStyles.list custom styles for the list container
 *   @param {object} customStyles.container custom styles for the button container
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

  const rootRef = useRef(null);
  const isDisabled = disabled || elements.length === 0;

  useEffect(() => {
    if (!rootRef?.current) return;
    /**
     * If the target element of the event isn't part of the dropdown, hides the item list.
     */
    const handleClick = (evt) => {
      if (!rootRef.current.contains(evt.target) && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener(`mouseup`, handleClick);
    return () => {
      document.removeEventListener(`mouseup`, handleClick);
    };
  }, [rootRef, isOpen]);

  return (
    <div
      style={mergeStyles([styles.container, customStyles.container])}
      ref={rootRef}
    >
      <CustomButton
        iconName='arrowDown'
        disabled={isDisabled}
        onPress={() => setIsOpen((prev) => !prev)}
        text={value?.name ?? placeholder}
        customStyles={{
          top: mergeStyles([
            styles.buttonTop,
            required && !value && styles.requiredStyle,
          ]),
          container: styles.buttonContainer,
        }}
        disableCenteringCorrection
        noDelay
      />
      <ol
        style={mergeStyles([
          styles.list,
          customStyles.list,
          isOpen && styles.listOpen,
        ])}
      >
        {elements.map((element) => (
          <li
            style={styles.items}
            key={element.id}
            {...onPressEvents({
              end: () => {
                if (element.id !== value?.id) onChange(element);
                setIsOpen((prev) => !prev);
              },
            })}
          >
            {element.name}
          </li>
        ))}
      </ol>
    </div>
  );
};

Dropdown.propTypes = {
  placeholder: PropTypes.string,
  customStyles: PropTypes.shape({
    container: PropTypes.object,
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

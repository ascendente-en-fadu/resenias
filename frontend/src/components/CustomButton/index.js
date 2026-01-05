import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { mergeStyles, onPressEvents } from '../../helpers';
import Icon from '../Icon';
import styles from './styles';

/**
 * Career selection button, with a centered text and a press animation. Optionally, an arrow on the left side can be shown.
 * Alternatively, the content con be replaced by a childer component.
 * @param {string} text button text
 * @param {object} customStyles
 *   @param {object} customStyles.container custom styles for the button container
 *   @param {object} customStyles.top custom styles for the top layer of the button
 *   @param {object} customStyles.highlight custom styles for the button higlight color
 * @param {function} onPress function to be called when the button in pressed
 * @param {string} iconName name of the icon to display in the button
 * @param {bool} disabled if true, the button is not interactable
 * @param {bool} disableCenteringCorrection if true, the button text will not be forced to be centered when it's displayed alongside an icon
 * @param {bool} disableBottom if true, the bottom part of the button is removed
 * @param {bool} noDelay if true, the onPress will be called immidiately when the user releases the press. This eliminates the delay that allow the user to fully see the animation before the onPress was called.
 * @param {string} id id to identify the button for analytics purposes
 */
const CustomButton = ({
  text,
  customStyles = {},
  onPress,
  iconName,
  disabled,
  disableCenteringCorrection,
  disableBottom,
  noDelay,
  id,
}) => {
  const [isPressed, setPressed] = useState(false);
  const hasIcon = Boolean(iconName);
  const hasText = Boolean(text);

  return (
    <button
      style={mergeStyles([styles.container, customStyles.container])}
      {...onPressEvents({
        start: () => !disabled && setPressed(true),
        end: () => {
          if (isPressed) {
            setPressed(false);
            noDelay ? onPress() : setTimeout(onPress, 80);
          }
        },
        cancel: () => isPressed && setPressed(false),
      })}
      disabled={disabled}
    >
      <div
        style={mergeStyles([
          styles.top,
          hasIcon && hasText && styles.topWithIconAndText,
          customStyles.top,
          disabled && styles.disabledText,
          isPressed && { ...styles.pressed, ...customStyles.highlight },
        ])}
        id={id}
      >
        {hasIcon && <Icon name={iconName} customStyles={styles.icon} />}
        {hasText && (
          <span id={id} style={styles.text}>
            {text}
          </span>
        )}
        {hasIcon && hasText && !disableCenteringCorrection && (
          <div style={styles.rightMargin} />
        )}
      </div>
      {!disableBottom && <div style={styles.bottom} />}
    </button>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string,
  customStyles: PropTypes.shape({
    container: PropTypes.object,
    top: PropTypes.object,
    highlight: PropTypes.object,
  }),
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
  disableCenteringCorrection: PropTypes.bool,
  disableBottom: PropTypes.bool,
  noDelay: PropTypes.bool,
  id: PropTypes.string,
};

export default CustomButton;

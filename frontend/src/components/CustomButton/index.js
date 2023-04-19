import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { mergeStyles, onPressEvents } from '../../helpers';
import Icon from '../Icon';
import styles from './styles';

/**
 * Career selection button, with a centered text and a press animation. Optionally, an arrow on the left side can be shown.
 * Alternatively, the content con be replaced by a childer component.
 * @param {any} children if present, replaces the whole content of the button for the children component
 * @param {string} text button text
 * @param {object} customStyles
 *   @param {object} customStyles.container custom styles for the button container
 *   @param {object} customStyles.top custom styles for the top layer of the button
 *   @param {object} customStyles.bottom custom styles for the bottom layer of the button
 *   @param {object} customStyles.highlight custom styles for the button higlight color
 * @param {function} onPress function to be called when the button in pressed
 * @param {string} iconName name of the icon to display in the button
 * @param {bool} disabled if true, the button is not interactable
 */
const CustomButton = ({
  text,
  customStyles = {},
  onPress,
  iconName,
  disabled,
}) => {
  const [animate, setAnimate] = useState(false);
  const hasIcon = Boolean(iconName);
  const hasText = Boolean(text);

  return (
    <div style={mergeStyles([styles.container, customStyles.container])}>
      <div
        disabled={disabled}
        style={mergeStyles([
          styles.top,
          hasIcon && hasText && styles.topWithIconAndText,
          disabled && styles.disabledText,
          customStyles.top,
          animate && { ...styles.pressed, ...customStyles.highlight },
        ])}
        {...onPressEvents({
          start: () => !disabled && setAnimate(true),
          end: () => {
            setAnimate(false);
            onPress();
          },
          cancel: () => animate && setAnimate(false),
        })}
      >
        {hasIcon && (
          <Icon
            name={iconName}
            customStyles={mergeStyles([
              styles.icon,
              hasText && styles.iconWithText,
            ])}
          />
        )}
        <span style={styles.text}>{text}</span>
        {hasIcon && hasText && <div style={styles.rightMargin} />}
      </div>
      <div style={mergeStyles([styles.bottom, customStyles.bottom])} />
    </div>
  );
};

CustomButton.propTypes = {
  children: PropTypes.any,
  text: PropTypes.string,
  customStyles: PropTypes.shape({
    container: PropTypes.object,
    bottom: PropTypes.object,
    top: PropTypes.object,
    highlight: PropTypes.object,
  }),
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string,
  disabled: PropTypes.bool,
};

export default CustomButton;

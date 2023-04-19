import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';
import { mergeStyles } from '../../helpers';
import { MAX_REVIEW_INPUT_CHARS } from '../../constants/misc';
import styles from './styles';

/**
 * Input to write a review with a button to send it.
 * @param {function} onPress function to be called when the button is pressed, taking the textarea content as an argument
 * @param {bool} required if there is no text written, displays a warning style
 */
const ReviewInput = ({ onPress, required }) => {
  const [content, setContent] = useState();

  return (
    <div
      style={mergeStyles([
        styles.bottom,
        required && !content && styles.requiredStyle,
      ])}
    >
      <textarea
        style={styles.input}
        placeholder='Escribí una reseña'
        value={content}
        onChange={(event) => {
          if (event.target.value.length <= MAX_REVIEW_INPUT_CHARS)
            setContent(event.target.value);
        }}
      />
      <CustomButton
        text={'ENVIAR'}
        customStyles={{ top: styles.buttonText }}
        onPress={() => {
          onPress(content);
        }}
      />
    </div>
  );
};

ReviewInput.propTypes = {
  onPress: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default ReviewInput;

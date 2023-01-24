import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';
import styles from './styles';

/**
 * Input to write a review with a button to send it.
 * @param {function} onPress function to be called when the button is pressed, taking the textarea content as an argument
 */
const ReviewInput = ({ onPress }) => {
  const [content, setContent] = useState();

  return (
    <div style={styles.buttonBottom}>
      <textarea
        style={styles.input}
        placeholder='Escribí una reseña'
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <CustomButton
        text={'ENVIAR'}
        customStyles={{ bottom: styles.button, text: styles.buttonText }}
        onPress={() => {
          onPress(content);
        }}
      />
    </div>
  );
};

ReviewInput.propTypes = {
  onPress: PropTypes.func,
};

export default ReviewInput;

import React from 'react';

import styles from './styles';
import CarreerButton from '../CarreerButton';

/**
 * Dropdown with a list of elements to choose.
 */
const ReviewInput = () => {
  return (
    <div style={styles.buttonBottom}>
      <textarea style={styles.input} placeholder='Escribí una reseña' />
      <CarreerButton
        text={'ENVIAR'}
        customStyles={{ bottom: styles.button, text: styles.buttonText }}
      />
    </div>
  );
};

ReviewInput.propTypes = {};

export default ReviewInput;

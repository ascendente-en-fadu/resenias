import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';
import styles from './styles';

/**
 * Modal to show a fullscreen message with a confirmation button, with two logical phases.
 * If the first fails, an error message will be shown. Otherwise, a success message will be shown.
 * The result of the second function call will be ignored.
 * @param {function} onClose function to be called when the cancel button is pressed
 * @param {function} onConfirm function to be called when the confirmation button is pressed
 * @param {function} onResultConfirm function to be called when the onConfirm is finished successfully. It's result will be ignored by the modal state.
 * @param {string} questionText text to be shown before the confirmation
 * @param {string} successText text to be shown if the confirmation succeeds
 * @param {string} errorText texto to be shown if the confirmation fails
 */
const FullScreenModal = ({
  onClose,
  onConfirm,
  onResultConfirm,
  questionText,
  successText,
  errorText,
}) => {
  const QUESTION_STATE = 'question';
  const LOADING_STATE = 'loading';
  const SUCCESS_STATE = 'success';
  const ERROR_STATE = 'error';
  const [modalState, setModalState] = useState(QUESTION_STATE);
  const texts = {
    question: questionText,
    loading: questionText,
    success: successText,
    error: errorText,
  };

  /**
   * Function to be called when the confirmation button is pressed
   */
  const onPressConfirmButton = async () => {
    try {
      setModalState(LOADING_STATE);
      await onConfirm();
      try {
        await onResultConfirm();
      } catch (error) {
        console.log(error);
      }
      setModalState(SUCCESS_STATE);
    } catch (error) {
      console.log(error);
      setModalState(ERROR_STATE);
    }
  };

  return (
    <div style={styles.modal}>
      <div style={styles.container}>
        <span style={styles.text}>{texts[modalState]}</span>
        {modalState === QUESTION_STATE || modalState === LOADING_STATE ? (
          <div style={styles.buttonsContainer}>
            <CustomButton
              text='Mejor no'
              customStyles={{
                text: styles.buttonText,
                bottom: styles.buttonBottom,
              }}
              onPress={onClose}
              disabled={modalState === LOADING_STATE}
            />
            <CustomButton
              text='Si, dale'
              customStyles={{
                text: styles.buttonText,
                bottom: styles.rightButtonBottom,
                top: styles.rightButtonTop,
                highlight: styles.rightButtonHighlight,
              }}
              onPress={onPressConfirmButton}
              disabled={modalState === LOADING_STATE}
            />
          </div>
        ) : (
          <div style={styles.buttonsContainer}>
            <CustomButton
              text='Aceptar'
              customStyles={{
                text: styles.buttonText,
                bottom: styles.buttonBottom,
              }}
              onPress={onClose}
            />
          </div>
        )}
      </div>
    </div>
  );
};

FullScreenModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onResultConfirm: PropTypes.func.isRequired,
  questionText: PropTypes.string.isRequired,
  successText: PropTypes.string.isRequired,
  errorText: PropTypes.string.isRequired,
};

export default FullScreenModal;

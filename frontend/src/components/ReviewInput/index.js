import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';
import Dropdown from '../Dropdown';
import { generateYearsList, mergeStyles } from '../../helpers';
import { MAX_REVIEW_INPUT_CHARS, RATES } from '../../constants/misc';
import styles from './styles';

/**
 * Input to write a review with a button to send it.
 * @param {function} sendCurrentReview function to be called when the button is pressed, taking the textarea content as an argument
 * @param {number} courseId if there is no text written, displays a warning style
 */
const ReviewInput = ({ sendCurrentReview, courseId }) => {
  const [content, setContent] = useState();
  const [year, setYear] = useState();
  const [rate, setRate] = useState();
  const [missingFields, setMissingFields] = useState();

  return (
    <div style={styles.container}>
      <div style={styles.title}>Armá tu reseña</div>
      <div style={styles.selectionContainer}>
        <div style={styles.question}>¿En qué año cursaste?</div>
        <Dropdown
          placeholder='Año'
          value={year}
          elements={generateYearsList()}
          onChange={setYear}
          customStyles={{
            container: styles.dropdownContainer,
            list: styles.yearsList,
          }}
          required={missingFields}
        />
      </div>
      <div style={styles.selectionContainer}>
        <div style={styles.question}>Calificá tu experiencia</div>
        <Dropdown
          placeholder='Calificación'
          value={rate}
          elements={RATES}
          onChange={setRate}
          customStyles={{
            container: styles.dropdownContainer,
            list: styles.ratesList,
          }}
          required={missingFields}
        />
      </div>
      <div
        style={mergeStyles([
          styles.inputBottom,
          missingFields && !content && styles.requiredStyle,
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
            if (year && rate && content) {
              sendCurrentReview({
                content: content,
                year: year.id,
                ...(rate.id !== -1 && { rate: rate.id }),
                course: courseId,
              });
            } else {
              setMissingFields(true);
            }
          }}
          disableBottom
        />
      </div>
    </div>
  );
};

ReviewInput.propTypes = {
  sendCurrentReview: PropTypes.func.isRequired,
  courseId: PropTypes.number.isRequired,
};

export default ReviewInput;

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CarreerButton from '../CarreerButton';
import Dropdown from '../Dropdown';
import styles from './styles';

/**
 * Course selector component, with a career indicator and a subject and course selector.
 * @param {string} carreer carreer name to display on top
 * @param {function} goBack function to be called when the carreer indicator is pressed
 */
const CourseSelector = ({ carreer, goBack }) => {
  const SUBJECTS = ['Análisis', 'Álgebra', 'Física', 'Química'];
  const COURSES = ['Ato', 'Rodriguezberta', 'Berto', 'Jolms'];
  const INITIAL_SUBJECT_VALUE = 'Materia';
  const [subject, setSubject] = useState(INITIAL_SUBJECT_VALUE);
  const [course, setCourse] = useState('Cátedra');

  return (
    <div style={styles.bottom}>
      <div style={styles.careerIndicatorContainer}>
        <CarreerButton
          text={carreer}
          customStyles={{
            top: styles.carreerButtonTop,
            bottom: styles.carreerButtonBottom,
          }}
          onPress={goBack}
        />
      </div>
      <div style={styles.selectorsContainer}>
        <Dropdown
          text='Materia'
          customStyle={styles.dropdownLeft}
          onChange={setSubject}
          value={subject}
          elements={SUBJECTS}
        />
        <Dropdown
          text='Cátedra'
          onChange={setCourse}
          value={course}
          disabled={subject === INITIAL_SUBJECT_VALUE}
          elements={COURSES}
        />
      </div>
    </div>
  );
};

CourseSelector.propTypes = {
  carreer: PropTypes.string,
  goBack: PropTypes.function,
};

export default CourseSelector;

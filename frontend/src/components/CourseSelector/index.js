import React, { useState } from 'react';

import CarreerButton from '../CarreerButton';
import Dropdown from '../Dropdown';
import styles from './styles';

/**
 * Course selector component, with a career indicator and a subject and course selector.
 */
const CourseSelector = () => {
  const SUBJECTS = ['Análisis', 'Álgebra', 'Física', 'Química'];
  const COURSES = ['Ato', 'Rodriguezberta', 'Berto', 'Jolms'];
  const INITIAL_SUBJECT_VALUE = 'Materia';
  const [subject, setSubject] = useState(INITIAL_SUBJECT_VALUE);
  const [course, setCourse] = useState('Cátedra');

  return (
    <div style={styles.bottom}>
      <div style={styles.careerIndicatorContainer}>
        <CarreerButton
          text='DI'
          customStyles={{
            top: styles.carreerButtonTop,
            bottom: styles.carreerButtonBottom,
          }}
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

export default CourseSelector;

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
const CourseSelector = ({ carreer, goBack, setSelectedCourseData }) => {
  const SUBJECTS = ['Análisis', 'Álgebra', 'Física', 'Química'];
  const COURSES = ['Ato', 'Rodriguezberta', 'Berto', 'Jolms'];
  const INITIAL_SUBJECT_VALUE = 'Materia';
  const INITIAL_COURSE_VALUE = 'Cátedra';
  const [subject, setSubject] = useState(INITIAL_SUBJECT_VALUE);
  const [course, setCourse] = useState(INITIAL_COURSE_VALUE);

  /**
   * Sets the current course selection on the local and external state
   */
  const setCurrentCourse = (value) => {
    setCourse(value);
    setSelectedCourseData({ course: value, subject: subject });
  };

  /**
   * Sets the current subject selection on the local and external state
   */
  const _setSubject = (value) => {
    setSubject(value);
    setCourse(INITIAL_COURSE_VALUE);
  };

  return (
    <div style={styles.container}>
      <div style={styles.careerIndicatorContainer}>
        <CarreerButton
          text={carreer}
          customStyles={{
            top: styles.carreerButtonTop,
            bottom: styles.carreerButtonBottom,
          }}
          onPress={goBack}
          arrow
        />
      </div>
      <div style={styles.selectorsContainer}>
        <Dropdown
          text='Materia'
          customStyles={{ bottom: styles.dropdownLeft, list: styles.list }}
          onChange={_setSubject}
          value={subject}
          elements={SUBJECTS}
        />
        <Dropdown
          text='Cátedra'
          customStyles={{ list: styles.list }}
          onChange={setCurrentCourse}
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
  goBack: PropTypes.func,
  setSelectedCourseData: PropTypes.func,
};

export default CourseSelector;

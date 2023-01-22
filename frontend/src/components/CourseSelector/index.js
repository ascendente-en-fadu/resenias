import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';
import Dropdown from '../Dropdown';
import styles from './styles';

/**
 * Course selector component, with a career indicator and a subject and course selector.
 * @param {string} carreer carreer name to display on top
 * @param {function} goBack function to be called when the carreer indicator is pressed
 */
const CourseSelector = ({
  carreer,
  goBack,
  courses,
  subjects,
  course,
  subject,
  setCourse,
  setSubject,
}) => {
  /**
   * Set current selected subject and reset course selection
   */
  const _setSubject = (value) => {
    setSubject(value);
    setCourse(undefined);
  };

  return (
    <div style={styles.container}>
      <div style={styles.careerIndicatorContainer}>
        <CustomButton
          text={carreer.name}
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
          placeholder='Materia'
          customStyles={{ bottom: styles.dropdownLeft, list: styles.list }}
          onChange={_setSubject}
          value={subject}
          elements={subjects}
        />
        <Dropdown
          placeholder='Cátedra'
          customStyles={{ list: styles.list }}
          onChange={setCourse}
          value={course}
          disabled={!subject}
          elements={courses}
        />
      </div>
    </div>
  );
};

CourseSelector.propTypes = {
  carreer: PropTypes.object,
  goBack: PropTypes.func,
  courses: PropTypes.array,
  subjects: PropTypes.array,
  course: PropTypes.object,
  subject: PropTypes.object,
  setCourse: PropTypes.func,
  setSubject: PropTypes.func,
};

export default CourseSelector;

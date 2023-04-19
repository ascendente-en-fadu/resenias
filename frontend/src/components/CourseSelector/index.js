import React from 'react';
import PropTypes from 'prop-types';

import CustomButton from '../CustomButton';
import Dropdown from '../Dropdown';
import styles from './styles';

/**
 * Course selector component, with a pressable career indicator and subject and course selectors.
 * @param {function} goBack function to be called when the career indicator is pressed
 * @param {object} career current selected career
 *   @param {string} career.name career visible name
 * @param {array} courses courses list to display on the selector
 * @param {array} subjects subjects list to display on the selector
 * @param {object} course current selected course
 *   @param {string} course.name course visible name
 *   @param {number} course.id course unique id
 * @param {function} setCourse function to set the selected course in the external state, taking the course object as an argument
 * @param {object} subject current selected subject
 *   @param {string} subject.name subject visible name
 *   @param {number} subject.id subject unique id
 * @param {function} setSubject function to set the selected subject in the external state, taking the subject object as an argument
 */
const CourseSelector = ({
  goBack,
  career,
  courses,
  subjects,
  course,
  setCourse,
  subject,
  setSubject,
}) => {
  return (
    <div style={styles.container}>
      <CustomButton
        text={career.name}
        customStyles={{
          container: styles.careerButtonContainer,
        }}
        onPress={goBack}
        iconName='arrowLeft'
      />
      <div style={styles.selectorsContainer}>
        <Dropdown
          placeholder='Materia'
          customStyles={{ bottom: styles.dropdownLeft, list: styles.list }}
          onChange={setSubject}
          value={subject}
          disabled={!subjects}
          elements={subjects}
        />
        <Dropdown
          placeholder='Cátedra'
          customStyles={{ bottom: styles.dropdownRight, list: styles.list }}
          onChange={setCourse}
          value={course}
          disabled={!subject || !courses}
          elements={courses}
        />
      </div>
    </div>
  );
};

CourseSelector.propTypes = {
  goBack: PropTypes.func.isRequired,
  career: PropTypes.object.isRequired,
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ),
  course: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  setCourse: PropTypes.func.isRequired,
  subject: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
  setSubject: PropTypes.func.isRequired,
};

export default CourseSelector;

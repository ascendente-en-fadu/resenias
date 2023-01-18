import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

/**
 *
 * @param {string} text buttont text
 */
const CourseSelector = () => {
  return (
    <button style={styles.bottom}>
      <div style={styles.top}>
        <div style={styles.careerIndicator}>DI</div>
        <div style={styles.selectorsContainer}>
          <div style={styles.subject}>Gestión</div>
          <div style={styles.course}>Totó</div>
        </div>
      </div>
    </button>
  );
};

CourseSelector.propTypes = {
  text: PropTypes.string,
};

export default CourseSelector;

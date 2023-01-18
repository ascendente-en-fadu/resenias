import React from 'react';

import styles from './styles';

/**
 * Course selector component, with a career indicator and a subject and course selector.
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

export default CourseSelector;

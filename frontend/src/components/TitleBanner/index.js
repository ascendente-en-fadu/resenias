import React from 'react';

import styles from './styles';

/**
 * Banner with the page title.
 */
const TitleBanner = () => {
  return (
    <div style={styles.container}>
      <span style={styles.title1}>Ascendente en FADU</span>
      <span style={styles.title2}>RESEÑAS</span>
      <span style={styles.title3}>FADU</span>
    </div>
  );
};

export default TitleBanner;

import React from 'react';

import styles from './styles';

/**
 * Banner with the page title.
 */
const TitleBanner = () => {
  return (
    <header style={styles.container}>
      <h4 style={styles.title1}>Ascendente en FADU</h4>
      <h1 style={styles.title2}>RESEÑAS</h1>
      <h2 style={styles.title3}>FADU</h2>
    </header>
  );
};

export default TitleBanner;

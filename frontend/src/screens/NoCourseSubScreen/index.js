import React from 'react';

import styles from './styles';

/**
 * Subscreen that displays a censorship message, to be used when there is no course selected.
 */
const NoCourseSubScreen = () => {
  return (
    <div style={styles.container}>
      <div style={styles.censorshipAdvice}>
        Ojito con las reseñas que escribís que si te vas de boca las borro.
        Podés usar palabrotas pero mantené el respeto.
      </div>
    </div>
  );
};

export default NoCourseSubScreen;

import React from 'react';

import { CustomRouter } from './routing';
import styles from './styles';

/**
 * Main app screen
 */
function App() {
  return (
    <div style={styles.container}>
      <CustomRouter />
    </div>
  );
}

export default App;

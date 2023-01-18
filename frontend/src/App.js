import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { ReviewsScreen } from './screens';
import styles from './styles';

/**
 *
 * @returns
 */
function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <div
      style={
        isTabletOrMobile && !isPortrait
          ? { ...styles.page, ...styles.pageMobileLandscape }
          : styles.page
      }
    >
      <div
        style={
          isTabletOrMobile
            ? isPortrait
              ? styles.containerMobile
              : styles.containerMobileLandscape
            : styles.containerDesktop
        }
      >
        <ReviewsScreen />
      </div>
    </div>
  );
}

export default App;

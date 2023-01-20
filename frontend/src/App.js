import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { mergeStyles } from './helpers';
import { CarreersScreen, ReviewsScreen } from './screens';
import styles from './styles';

/**
 * Main app screen, with responsive logic to be adapted to desktop, phone portrait and phone landscape displays.
 */
function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const [carreer, setCarreer] = useState();

  /**
   *
   */
  const showCarreer = (value) => {
    setTimeout(() => setCarreer(value), 100);
  };

  /**
   *
   */
  const goBack = () => {
    setTimeout(() => setCarreer(''), 100);
  };

  return (
    <div
      style={mergeStyles([
        styles.page,
        isTabletOrMobile && !isPortrait && styles.pageMobileLandscape,
      ])}
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
        {carreer ? (
          <ReviewsScreen carreer={carreer} goBack={goBack} />
        ) : (
          <CarreersScreen navigateToCarreer={showCarreer} />
        )}
      </div>
    </div>
  );
}

export default App;

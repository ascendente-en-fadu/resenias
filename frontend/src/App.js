import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getCarreers, mergeStyles } from './helpers';
import { CarreersScreen, ReviewsScreen } from './screens';
import styles from './styles';

/**
 * Main app screen, with responsive logic to be adapted to desktop, phone portrait and phone landscape displays.
 */
function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const [carreer, setCarreer] = useState();
  const [carreers, setCarreers] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    /**
     * Gets the carreers list
     */
    const getCarreerList = async () => {
      try {
        const response = await getCarreers(controller);
        setCarreers(response);
      } catch (error) {
        error && console.log(error);
      }
    };

    getCarreerList();
    return () => controller.abort();
  }, []);

  /**
   * Sets the current selected carreer
   */
  const setCurrentCarreer = (value) => {
    setTimeout(() => setCarreer(value), 100);
  };

  /**
   * Goes back to the career selection screen
   */
  const goBack = () => {
    setTimeout(() => setCarreer(false), 100);
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
          <CarreersScreen
            setCurrentCarreer={setCurrentCarreer}
            carreers={carreers}
          />
        )}
      </div>
    </div>
  );
}

export default App;

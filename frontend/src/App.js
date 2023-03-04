import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getCareers, mergeStyles } from './helpers';
import { CareersScreen, LoginScreen, ReviewsScreen } from './screens';
import styles from './styles';

/**
 * Main app screen, with responsive logic to be adapted to desktop, phone portrait and phone landscape displays.
 */
function App() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const [career, setCareer] = useState();
  const [careers, setCareers] = useState([]);
  const [sessionId, setSessionId] = useState();

  useEffect(() => {
    const controller = new AbortController();
    /**
     * Gets the careers list
     */
    const getCareerList = async () => {
      try {
        const response = await getCareers(controller);
        setCareers(response);
      } catch (error) {
        error && console.log(error);
      }
    };

    getCareerList();
    return () => controller.abort();
  }, []);

  /**
   * Sets the current selected career
   */
  const setCurrentCareer = (value) => {
    setTimeout(() => setCareer(value), 100);
  };

  /**
   * Goes back to the career selection screen
   */
  const goBack = () => {
    setTimeout(() => setCareer(false), 100);
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
        {career ? (
          <ReviewsScreen
            career={career}
            goBack={goBack}
            sessionId={sessionId}
          />
        ) : sessionId ? (
          <CareersScreen
            setCurrentCareer={setCurrentCareer}
            careers={careers}
          />
        ) : (
          <LoginScreen setSessionId={setSessionId} />
        )}
      </div>
    </div>
  );
}

export default App;

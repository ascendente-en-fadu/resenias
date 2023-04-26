import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';

import { CareersScreen, LoginScreen, ReviewsScreen } from './screens';
import styles from './styles';

/**
 * Main app screen, with responsive logic to be adapted to desktop, phone portrait and phone landscape displays.
 */
function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' });
  const sessionId = useSelector((state) => state.session.sessionId);
  const careers = useSelector((state) => state.reviews.careers);

  return (
    <div style={styles.page}>
      <div style={isMobile ? styles.containerMobile : styles.containerDesktop}>
        {careers.selected ? (
          <ReviewsScreen />
        ) : sessionId ? (
          <CareersScreen />
        ) : (
          <LoginScreen />
        )}
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { useSelector } from 'react-redux';

import { CareersScreen, LoginScreen, ReviewsScreen } from './screens';
import styles from './styles';

/**
 * Main app screen, with responsive logic to be adapted to desktop, phone portrait and phone landscape displays.
 */
function App() {
  const sessionId = useSelector((state) => state.session.sessionId);
  const careers = useSelector((state) => state.reviews.careers);

  return (
    <div style={styles.container}>
      {careers.selected ? (
        <ReviewsScreen />
      ) : sessionId ? (
        <CareersScreen />
      ) : (
        <LoginScreen />
      )}
    </div>
  );
}

export default App;

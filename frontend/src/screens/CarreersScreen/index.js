import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton, Footer, TitleBanner } from '../../components';
import styles from './styles';

/**
 * Career selection screen that shows the careers list.
 * @param {function} navigateToCarreer function to navigate to a specific carreer to select a course
 */
const CarreersScreen = ({ navigateToCarreer }) => {
  const CARREERS = ['CBC', 'DG', 'DInd', 'DP', 'Arq', 'DI', 'DIyS', 'DT'];

  /**
   * Navigates to course selection screen of a specific carreer
   */
  const selectCarreer = (carreer) => {
    navigateToCarreer(carreer);
  };

  return (
    <div style={styles.container}>
      <TitleBanner />
      <div style={styles.buttonsContainer}>
        <div style={styles.buttonsColumnContainer}>
          {CARREERS.slice(0, CARREERS.length / 2).map((text) => (
            <CustomButton text={text} key={text} onPress={selectCarreer} />
          ))}
        </div>
        <div style={styles.buttonsColumnContainer}>
          {CARREERS.slice(CARREERS.length / 2, CARREERS.length).map((text) => (
            <CustomButton text={text} key={text} onPress={selectCarreer} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

CarreersScreen.propTypes = {
  navigateToCarreer: PropTypes.func,
};

export default CarreersScreen;

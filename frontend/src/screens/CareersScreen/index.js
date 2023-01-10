import React from 'react';

import { CarreerButton, Footer, TitleBanner } from '../../components';
import styles from './styles';

/**
 * Career selection screen that shows the careers list.
 */
const CareersScreen = () => {
  return (
    <div style={styles.container}>
      <TitleBanner />
      <div style={styles.buttonsContainer}>
        <div style={styles.buttonsColumnContainer}>
          <CarreerButton text='CBC' />
          <CarreerButton text='DG' />
          <CarreerButton text='DInd' />
          <CarreerButton text='DP' />
        </div>
        <div style={styles.buttonsColumnContainer}>
          <CarreerButton text='Arq' />
          <CarreerButton text='DI' />
          <CarreerButton text='DIyS' />
          <CarreerButton text='DT' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareersScreen;

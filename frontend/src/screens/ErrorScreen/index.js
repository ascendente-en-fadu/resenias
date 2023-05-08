import React from 'react';

import { Icon, TitleBanner } from '../../components';
import styles from './styles';

/**
 * Error screen that shows an apologize message.
 */
const ErrorScreen = () => {
  return (
    <>
      <TitleBanner />
      <main style={styles.contentContainer}>
        <Icon name='error' customStyles={styles.errorIcon} />
        <span style={styles.errorText}>ERROR</span>
        <p style={styles.apologizeText}>
          Esto no debería pasar, pero la página no está funcando. Volvé a
          intentar más tarde o escribime a{' '}
          <a
            href='https://www.instagram.com/ascendente_en_fadu/?hl=es'
            target='_blank'
            rel='noreferrer'
            style={styles.link}
          >
            @ascendente_en_fadu
          </a>
          .
        </p>
      </main>
    </>
  );
};

export default ErrorScreen;

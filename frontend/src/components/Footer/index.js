import React from 'react';

import styles from './styles';
import Icon from '../Icon';

/**
 * Footer with the contact and cafecito links.
 */
const Footer = () => {
  return (
    <footer style={styles.container}>
      <address style={styles.linkContainer}>
        <Icon name='cafecito' customStyles={styles.icon} />
        <a
          href='https://cafecito.app/ascendente_en_fadu'
          target='_blank'
          rel='noreferrer'
          style={styles.link}
        >
          Invitame un cafecito
        </a>
      </address>
      <address style={styles.linkContainer}>
        <Icon name='instagram' customStyles={styles.icon} />
        <a
          href='https://www.instagram.com/ascendente_en_fadu/?hl=es'
          target='_blank'
          rel='noreferrer'
          style={styles.link}
        >
          @ascendente_en_fadu
        </a>
        <span style={styles.version}>
          {'Versión v' + process.env.REACT_APP_VERSION}
        </span>
      </address>
    </footer>
  );
};

export default Footer;

import React from 'react';

import { CafecitoIcon, InstagramIcon } from '../../images';
import styles from './styles';

/**
 * Footer with the contact and cafecito links.
 */
const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.linkContainer}>
        <CafecitoIcon width='1.2em' />
        <a href='https://cafecito.app/ascendente_en_fadu' style={styles.link}>
          Invitame un cafecito
        </a>
      </div>
      <div style={styles.linkContainer}>
        <InstagramIcon width='1.2em' />
        <a
          href='https://www.instagram.com/ascendente_en_fadu/?hl=es'
          style={styles.link}
        >
          @ascendente_en_fadu
        </a>
      </div>
    </div>
  );
};

export default Footer;

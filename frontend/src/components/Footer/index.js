import React from 'react';

import styles from './styles';

/**
 * Footer with the contact and cafecito links.
 */
const Footer = () => {
  return (
    <div style={styles.container}>
      <a href='https://cafecito.app/ascendente_en_fadu' style={styles.link}>
        Invitame un cafecito
      </a>
      <a
        href='https://www.instagram.com/ascendente_en_fadu/?hl=es'
        style={styles.link}
      >
        @ascendente_en_fadu
      </a>
    </div>
  );
};

export default Footer;

import React from 'react';

import styles from './styles';

/**
 * Footer with the contact and cafecito links.
 */
const Footer = () => {
  return (
    <div style={styles.container}>
      <span style={styles.link}>Invitame un cafecito</span>
      <span style={styles.link}>@ascendente_en_fadu</span>
    </div>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './styles';
import Icon from '../Icon';
import { mergeStyles } from '../../helpers';

/**
 * Footer with the contact and cafecito links.
 * @param {bool} isBackendOffline if true, the logout link is not displayed
 */
const Footer = ({ isBackendOffline }) => {
  const careersList = useSelector((state) => state.reviews.careersList);
  const sessionId = useSelector((state) => state.session.sessionId);

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

        {sessionId && careersList.length !== 0 && !isBackendOffline && (
          <Link
            style={mergeStyles([styles.version, styles.logout])}
            to={'/logout'}
          >
            Cerrar sesión
          </Link>
        )}
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

Footer.propTypes = {
  isBackendOffline: PropTypes.bool,
};
export default Footer;

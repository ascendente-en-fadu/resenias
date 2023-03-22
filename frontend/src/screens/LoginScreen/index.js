import React from 'react';
import PropTypes from 'prop-types';
import { useGoogleLogin } from '@react-oauth/google';

import { CustomButton, Footer, TitleBanner } from '../../components';
import { doLogin } from '../../helpers';
import styles from './styles';

/**
 * Login screen, with a button to do a Google login and a apologize message
 * @param {function} setSessionId function to set the current user session id
 */
const LoginScreen = ({ setSessionId }) => {
  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        if (codeResponse) {
          console.log('Successful Google login');
          const sessionId = await doLogin(codeResponse.access_token);
          setSessionId(sessionId);
        } else {
          throw new Error("The Google login hasn't returned the access token");
        }
      } catch (error) {
        error && console.log(error);
      }
    },
    onError: (error) => console.log(error),
  });

  /**
   * Function to set a fake session id, to skip the real Google Login
   */
  const setFakeSessionId = () => setSessionId('my-session-id');
  return (
    <div style={styles.container}>
      <TitleBanner />
      <div style={styles.buttonContainer}>
        <span style={styles.apologizeText}>
          Logueate con Google. Ya se que no tenés ganas, pero es necesario por temas de seguridad.
        </span>
        <CustomButton
          text='Continuar con Google'
          onPress={
            process.env.REACT_APP_SKIP_LOGIN === 'true'
              ? setFakeSessionId
              : login
          }
          customStyles={{
            bottom: styles.buttonBottom,
            text: styles.buttonText,
          }}
          googleLogo
        />
      </div>
      <Footer />
    </div>
  );
};

LoginScreen.propTypes = {
  setSessionId: PropTypes.func.isRequired,
};

export default LoginScreen;

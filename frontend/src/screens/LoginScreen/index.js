import React from 'react';
import PropTypes from 'prop-types';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { CustomButton, Footer, TitleBanner } from '../../components';
import styles from './styles';

/**
 * Login screen, with a button to do a Google login and a apologize message
 * @param {function} setCurrentUser function to set the current user email
 */
const LoginScreen = ({ setCurrentUser }) => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log('Access Token del usuario: ' + codeResponse.access_token);
      if (codeResponse) {
        axios
          .get(
            `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
            {
              headers: {
                Authorization: `Bearer ${codeResponse.access_token}`,
                Accept: 'application/json',
              },
            },
          )
          .then((res) => {
            setCurrentUser(res.data.email);
            console.log('Mail del usuario: ' + res.data.email);
          })
          .catch((err) => console.log(err));
      }
    },
    onError: (error) => console.log(error),
  });

  return (
    <div style={styles.container}>
      <TitleBanner />
      <div style={styles.buttonContainer}>
        <span style={styles.apologizeText}>
          Logeate con Google. Ya se que no tenés ganas pero es necesario por
          seguridad.
        </span>
        <CustomButton
          text='Continuar con Google'
          onPress={login}
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
  setCurrentUser: PropTypes.func.isRequired,
};

export default LoginScreen;

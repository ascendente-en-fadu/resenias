import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CustomButton, TitleBanner } from '../../components';
import { doLogin } from '../../helpers';
import { setSessionId } from '../../redux';
import styles from './styles';

/**
 * Login screen, with a button to do a Google login and a apologize message.
 */
const LoginScreen = () => {
  const careersList = useSelector((state) => state.reviews.careersList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        if (codeResponse) {
          console.log('Successful Google login');
          const sessionId = await doLogin(codeResponse.access_token);
          doClientLogin(sessionId);
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
  const setFakeSessionId = () => {
    doClientLogin('my-session-id');
  };

  /**
   * Makes the login in the client local state and navigates to the careers screen
   */
  const doClientLogin = (sessionId) => {
    localStorage.setItem('sessionId', sessionId);
    dispatch(setSessionId(sessionId));
    navigate('/carreras', { replace: true });
  };

  return (
    <>
      <TitleBanner />
      <main style={styles.contentContainer}>
        <p style={styles.apologizeText}>
          Logueate con Google. Ya se que no tenés ganas, pero es necesario por
          temas de seguridad.
        </p>
        <CustomButton
          text='Continuar con Google'
          onPress={
            process.env.REACT_APP_SKIP_LOGIN === 'true'
              ? setFakeSessionId
              : login
          }
          customStyles={{
            top: styles.buttonText,
          }}
          iconName='google'
          disabled={careersList.length === 0}
        />
      </main>
    </>
  );
};

export default LoginScreen;

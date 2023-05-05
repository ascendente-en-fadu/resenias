import React, { useEffect, useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, Footer, Icon, TitleBanner } from '../../components';
import { doLogin, getCareers } from '../../helpers';
import { setCareersList, setSessionId } from '../../redux';
import styles from './styles';

/**
 * Login screen, with a button to do a Google login and a apologize message. Displays an error message if the careers requests fails, assuming a backend failure.
 */
const LoginScreen = () => {
  const [isBackendOffline, setBackendOffline] = useState(false);
  const careers = useSelector((state) => state.reviews.careers);
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    /**
     * Gets the careers list
     */
    const getCareerList = async () => {
      try {
        const response = await getCareers(controller);
        dispatch(setCareersList(response));
        setBackendOffline(false);
      } catch (error) {
        error && console.log(error);
        setBackendOffline(true);
      }
    };

    getCareerList();
    return () => controller.abort();
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        if (codeResponse) {
          console.log('Successful Google login');
          const sessionId = await doLogin(codeResponse.access_token);
          dispatch(setSessionId(sessionId));
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
  const setFakeSessionId = () => dispatch(setSessionId('my-session-id'));
  return (
    <div style={styles.container}>
      <TitleBanner />
      <main style={styles.contentContainer}>
        {isBackendOffline ? (
          <>
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
          </>
        ) : (
          <>
            <p style={styles.apologizeText}>
              Logueate con Google. Ya se que no tenés ganas, pero es necesario
              por temas de seguridad.
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
              disabled={careers.list.length === 0}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default LoginScreen;

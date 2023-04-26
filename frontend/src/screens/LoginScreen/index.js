import React, { useEffect } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, Footer, TitleBanner } from '../../components';
import { doLogin, getCareers } from '../../helpers';
import { setCareersList, setSessionId } from '../../redux';
import styles from './styles';

/**
 * Login screen, with a button to do a Google login and a apologize message
 */
const LoginScreen = () => {
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
      } catch (error) {
        error && console.log(error);
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
      <div style={styles.continueContainer}>
        <span style={styles.apologizeText}>
          Logueate con Google. Ya se que no tenés ganas, pero es necesario por
          temas de seguridad.
        </span>
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
      </div>
      <Footer />
    </div>
  );
};

export default LoginScreen;

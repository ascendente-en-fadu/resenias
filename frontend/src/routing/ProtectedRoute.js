import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setSessionId } from '../redux';

/**
 * Route logic for the routes where the user should be logged in. If it's not, redirects the browser to the login screen.
 */
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const sessionId = localStorage.getItem('sessionId');

  useEffect(() => {
    if (sessionId) {
      dispatch(setSessionId(sessionId));
    }
  }, []);

  return sessionId ? children : <Navigate to='/login' replace={true} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element,
};

export default ProtectedRoute;

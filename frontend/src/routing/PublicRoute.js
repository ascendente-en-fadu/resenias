import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { setSessionId } from '../redux';

/**
 * Route logic for the routes where the user shouldn't be logged in. If it is, redirects the browser to the careers screen.
 */
const PublicRoute = ({ children }) => {
  const dispatch = useDispatch();
  const sessionId = localStorage.getItem('sessionId');

  useEffect(() => {
    if (sessionId) {
      dispatch(setSessionId(sessionId));
    }
  }, []);

  return sessionId ? <Navigate to='/carreras' replace={true} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.element,
};

export default PublicRoute;

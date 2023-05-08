import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { clearSessionId } from '../redux';

/**
 * Route logic for the logout process.
 */
const LogoutRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem('sessionId');
    dispatch(clearSessionId());
  }, []);

  return <Navigate to='/login' replace={true} />;
};

export default LogoutRoute;

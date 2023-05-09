import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import {
  CareersScreen,
  ErrorScreen,
  LoginScreen,
  ReviewsScreen,
} from '../screens';
import PublicRoute from './PublicRoute';
import LogoutRoute from './LogoutRoute';
import ProtectedRoute from './ProtectedRoute';
import { Footer } from '../components';
import { useDispatch } from 'react-redux';
import { getCareers } from '../helpers';
import { setCareersList } from '../redux';

/**
 * Router implementation that sets all the routing structure and logic
 */
const CustomRouter = () => {
  const [isBackendOffline, setBackendOffline] = useState(false);
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
        if (error) {
          console.log(error);
          setBackendOffline(true);
        }
      }
    };

    getCareerList();
    return () => controller.abort();
  }, []);

  return (
    <BrowserRouter>
      {isBackendOffline ? (
        <Routes>
          <Route path='*' element={<Navigate to='/error' />} />
          <Route path='/error' element={<ErrorScreen />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path='*'
            element={
              <PublicRoute>
                <Navigate to='/login' replace={true} />
              </PublicRoute>
            }
          />
          <Route
            path='/login'
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />
          <Route
            path='/carreras'
            element={
              <ProtectedRoute>
                <CareersScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path='/resenias'
            element={
              <ProtectedRoute>
                <ReviewsScreen />
              </ProtectedRoute>
            }
          />
          <Route path='/logout' element={<LogoutRoute />} />
        </Routes>
      )}
      <Footer isBackendOffline={isBackendOffline} />
    </BrowserRouter>
  );
};

export default CustomRouter;

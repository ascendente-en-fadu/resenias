import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { sessionReducer } from '../redux/sessionSlice';
import { reviewsReducer } from '../redux/reviewsSlice';

/**
 *
 * @param {*} ui
 * @param {*} param1
 * @returns
 */
export const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        session: sessionReducer,
        reviews: reviewsReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) => {
  /**
   *
   * @param {*} param0
   * @returns
   */
  const Wrapper = (
    // eslint-disable-next-line react/prop-types
    { children },
  ) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

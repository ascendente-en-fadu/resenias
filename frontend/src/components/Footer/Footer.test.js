import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import Footer from '.';
import { renderWithProviders } from '../../helpers';

const stateMock = {
  session: {
    sessionId: 'test-session-id',
  },
  reviews: {
    careersList: [
      {
        name: 'CBC',
        id: 1,
      },
      {
        name: 'DG',
        id: 2,
      },
      {
        name: 'DInd',
        id: 3,
      },
    ],
  },
};

test('The IG icon is displayed', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  const element = screen.queryByText('instagram');
  expect(element).toBeInTheDocument();
});

test('The logout link is not displayed if the backend is offline', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer isBackendOffline={false} />
    </MemoryRouter>,
  );

  const element = screen.queryByText('Cerrar sesión');
  expect(element).not.toBeInTheDocument();
});

test('The logout link is not displayed if there is no career list', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
    {
      preloadedState: { session: stateMock.session },
    },
  );

  const element = screen.queryByText('Cerrar sesión');
  expect(element).not.toBeInTheDocument();
});

test('The logout link is displayed if the user is logged and there is a career list', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
    {
      preloadedState: stateMock,
    },
  );

  const element = screen.queryByText('Cerrar sesión');
  expect(element).toBeInTheDocument();
});

test('The cafecito link is displayed', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  const element = screen.queryByText('Invitame un cafecito');
  expect(element).toBeInTheDocument();
});

test('The version text is displayed', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  const element = screen.queryByText('Versión v', { exact: false });
  expect(element).toBeInTheDocument();
});

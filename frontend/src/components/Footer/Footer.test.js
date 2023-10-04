import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import { renderWithProviders } from '../../helpers';
import Footer from '.';

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

test('The links and texts are displayed to a logged user, when the backend is online', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
    {
      preloadedState: stateMock,
    },
  );

  const igLink = screen.getByText('instagram');
  expect(igLink).toBeInTheDocument();

  const logoutLink = screen.getByText('Cerrar sesión');
  expect(logoutLink).toBeInTheDocument();

  const cafecitoLink = screen.getByText('Invitame un cafecito');
  expect(cafecitoLink).toBeInTheDocument();

  const versionLink = screen.getByText('Versión v', { exact: false });
  expect(versionLink).toBeInTheDocument();
});

test('The links and texts are displayed to an unlogged user, except by the logout link', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
    {
      preloadedState: { reviews: stateMock.reviews },
    },
  );

  const igLink = screen.getByText('instagram');
  expect(igLink).toBeInTheDocument();

  const logoutLink = screen.queryByText('Cerrar sesión');
  expect(logoutLink).not.toBeInTheDocument();

  const cafecitoLink = screen.getByText('Invitame un cafecito');
  expect(cafecitoLink).toBeInTheDocument();

  const versionLink = screen.getByText('Versión v', { exact: false });
  expect(versionLink).toBeInTheDocument();
});

test('The links and texts are displayed to an user when the backend is offline, except by the logout link', () => {
  renderWithProviders(
    <MemoryRouter>
      <Footer isBackendOffline={true} />
    </MemoryRouter>,
    {
      preloadedState: stateMock,
    },
  );

  const igLink = screen.getByText('instagram');
  expect(igLink).toBeInTheDocument();

  const logoutLink = screen.queryByText('Cerrar sesión');
  expect(logoutLink).not.toBeInTheDocument();

  const cafecitoLink = screen.getByText('Invitame un cafecito');
  expect(cafecitoLink).toBeInTheDocument();

  const versionLink = screen.getByText('Versión v', { exact: false });
  expect(versionLink).toBeInTheDocument();
});

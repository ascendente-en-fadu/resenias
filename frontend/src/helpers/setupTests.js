import React from 'react';

jest.mock('../components/Icon', () => {
  // eslint-disable-next-line require-jsdoc
  const IconMock = (
    // eslint-disable-next-line react/prop-types
    { name },
  ) => <div>{name}</div>;
  return IconMock;
});

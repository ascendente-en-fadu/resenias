import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { FullScreenModal } from '../components';

export const ModalContext = createContext({});

/**
 * Context provider to allow the usage of the FullScreenModal along the whole page.
 */
export const ModalContextProvider = ({ children }) => {
  const [modalData, setModalData] = useState({});

  return (
    <ModalContext.Provider value={{ setModalData }}>
      {children}
      {Object.keys(modalData).length !== 0 && (
        <FullScreenModal
          onConfirm={modalData.onConfirm}
          onResultConfirm={modalData.onResultConfirm}
          questionText={modalData.questionText}
          errorText={modalData.errorText}
          successText={modalData.successText}
          onClose={() => setModalData({})}
          id={modalData.id}
        />
      )}
    </ModalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.element,
};

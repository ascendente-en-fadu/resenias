import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton, Footer, TitleBanner } from '../../components';
import styles from './styles';

/**
 * Career selection screen that shows the careers list.
 * @param {function} setCurrentCarreer function to navigate to a specific carreer to select a course
 * @param {array} carreers carreers list to show in the screen
 *   @param {string} carreers.name carreer visible name
 *   @param {number} carreers.id carreer unique id
 */
const CarreersScreen = ({ setCurrentCarreer, carreers }) => {
  return (
    <div style={styles.container}>
      <TitleBanner />
      <div style={styles.buttonsContainer}>
        <div style={styles.buttonsColumnContainer}>
          {carreers.slice(0, carreers.length / 2).map((carreer) => (
            <CustomButton
              text={carreer.name}
              key={carreer.id}
              onPress={() => setCurrentCarreer(carreer)}
            />
          ))}
        </div>
        <div style={styles.buttonsColumnContainer}>
          {carreers
            .slice(carreers.length / 2, carreers.length)
            .map((carreer) => (
              <CustomButton
                text={carreer.name}
                key={carreer.id}
                onPress={() => setCurrentCarreer(carreer)}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

CarreersScreen.propTypes = {
  setCurrentCarreer: PropTypes.func.isRequired,
  carreers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default CarreersScreen;

import React from 'react';
import PropTypes from 'prop-types';

import { CustomButton, Footer, TitleBanner } from '../../components';
import styles from './styles';

/**
 * Career selection screen that shows the careers list.
 * @param {function} setCurrentCareer function to navigate to a specific career to select a course
 * @param {array} careers careers list to show in the screen
 *   @param {string} careers.name career visible name
 *   @param {number} careers.id career unique id
 */
const CareersScreen = ({ setCurrentCareer, careers }) => {
  return (
    <div style={styles.container}>
      <TitleBanner />
      <div style={styles.buttonsContainer}>
        <div style={styles.buttonsColumnContainer}>
          {careers.slice(0, careers.length / 2).map((career) => (
            <CustomButton
              text={career.name}
              key={career.id}
              onPress={() => setCurrentCareer(career)}
              customStyles={{ container: styles.buttonContainer }}
            />
          ))}
        </div>
        <div style={styles.buttonsColumnContainer}>
          {careers.slice(careers.length / 2, careers.length).map((career) => (
            <CustomButton
              text={career.name}
              key={career.id}
              onPress={() => setCurrentCareer(career)}
              customStyles={{ container: styles.buttonContainer }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

CareersScreen.propTypes = {
  setCurrentCareer: PropTypes.func.isRequired,
  careers: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default CareersScreen;

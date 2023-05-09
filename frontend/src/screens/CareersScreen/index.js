import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { CustomButton, TitleBanner } from '../../components';
import styles from './styles';

/**
 * Career selection screen that shows the careers list.
 */
const CareersScreen = () => {
  const careersList = useSelector((state) => state.reviews.careersList);
  const navigate = useNavigate();

  return (
    <>
      <TitleBanner />
      <main style={styles.buttonsContainer}>
        <ul style={styles.buttonsColumnContainer}>
          {careersList.slice(0, careersList.length / 2).map((career) => (
            <li key={career.id}>
              <CustomButton
                text={career.name}
                onPress={() => navigate(`/resenias?carrera=${career.id}`)}
                customStyles={{ container: styles.buttonContainer }}
              />
            </li>
          ))}
        </ul>
        <ul style={styles.buttonsColumnContainer}>
          {careersList
            .slice(careersList.length / 2, careersList.length)
            .map((career) => (
              <li key={career.id}>
                <CustomButton
                  text={career.name}
                  onPress={() => navigate(`/resenias?carrera=${career.id}`)}
                  customStyles={{ container: styles.buttonContainer }}
                />
              </li>
            ))}
        </ul>
      </main>
    </>
  );
};

export default CareersScreen;

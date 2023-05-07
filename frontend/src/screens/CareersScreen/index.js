import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, TitleBanner } from '../../components';
import { selectCareer } from '../../redux';
import styles from './styles';

/**
 * Career selection screen that shows the careers list.
 */
const CareersScreen = () => {
  const careers = useSelector((state) => state.reviews.careers);
  const dispatch = useDispatch();

  return (
    <>
      <TitleBanner />
      <main style={styles.buttonsContainer}>
        <ul style={styles.buttonsColumnContainer}>
          {careers.list.slice(0, careers.list.length / 2).map((career) => (
            <li key={career.id}>
              <CustomButton
                text={career.name}
                onPress={() => dispatch(selectCareer(career))}
                customStyles={{ container: styles.buttonContainer }}
              />
            </li>
          ))}
        </ul>
        <ul style={styles.buttonsColumnContainer}>
          {careers.list
            .slice(careers.list.length / 2, careers.list.length)
            .map((career) => (
              <li key={career.id}>
                <CustomButton
                  text={career.name}
                  onPress={() => dispatch(selectCareer(career))}
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

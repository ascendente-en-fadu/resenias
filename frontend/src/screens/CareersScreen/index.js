import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CustomButton, Footer, TitleBanner } from '../../components';
import styles from './styles';
import { selectCareer } from '../../redux';

/**
 * Career selection screen that shows the careers list.
 */
const CareersScreen = () => {
  const dispatch = useDispatch();
  const careers = useSelector((state) => state.reviews.careers);

  return (
    <div style={styles.container}>
      <TitleBanner />
      <div style={styles.buttonsContainer}>
        <div style={styles.buttonsColumnContainer}>
          {careers.list.slice(0, careers.list.length / 2).map((career) => (
            <CustomButton
              text={career.name}
              key={career.id}
              onPress={() => dispatch(selectCareer(career))}
              customStyles={{ container: styles.buttonContainer }}
            />
          ))}
        </div>
        <div style={styles.buttonsColumnContainer}>
          {careers.list
            .slice(careers.list.length / 2, careers.list.length)
            .map((career) => (
              <CustomButton
                text={career.name}
                key={career.id}
                onPress={() => dispatch(selectCareer(career))}
                customStyles={{ container: styles.buttonContainer }}
              />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CareersScreen;

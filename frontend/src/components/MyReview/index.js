import React from 'react';

import { ReactComponent as DeleteIcon } from '../../images/delete.svg';
import CarreerButton from '../CarreerButton';
import styles from './styles';

/**
 * Box to display the review of the current user.
 */
const MyReview = () => {
  const MY_REVIEW = {
    content: 'Esta reseña la escribí yo, que soy un capo.',
    year: '2025',
    rate: 'Sobre nivel',
  };

  return (
    <div style={styles.bottom}>
      <CarreerButton customStyles={{ bottom: styles.deleteBottom }}>
        <DeleteIcon width='1.5em' />
      </CarreerButton>
      <div style={styles.reviewContainer}>
        <span style={styles.title}>Tu reseña</span>
        <span style={styles.dataText}>{'Cursé en ' + MY_REVIEW.year}</span>
        <span style={styles.contentText}>{MY_REVIEW.content}</span>
        <span style={styles.dataText}>
          {'Nota a la cátedra: ' + MY_REVIEW.rate}
        </span>
      </div>
    </div>
  );
};

export default MyReview;

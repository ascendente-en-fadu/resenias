import React from 'react';

import styles from './styles';

/**
 * Dropdown with a list of elements to choose.
 */
const ReviewsList = () => {
  const REVIEWS = [
    {
      content: 'Me reprobó por un diseño de una aspiradora, malísimo.',
      year: '2020',
      rate: 'Bajo nivel',
    },
    {
      content:
        'Me recomendaron un drive para bajar programas piratas que está re piola. 10/10.',
      year: '2019',
      rate: 'Sobre nivel',
    },
    {
      content:
        'Me dormí unas siestas tremendas en las teóricas pero igual aprobé, no me quejo.',
      year: '2022',
      rate: 'Nivel',
    },
  ];
  return (
    <div style={styles.bottom}>
      {REVIEWS.map(({ content, rate, year }) => (
        <div style={styles.reviewContainer} key={content}>
          <span style={styles.dataText}>{'Cursé en ' + year}</span>
          <span style={styles.contentText}>{content}</span>
          <span style={styles.dataText}>{'Nota a la cátedra: ' + rate} </span>
          <div style={styles.divider} />
        </div>
      ))}
    </div>
  );
};

ReviewsList.propTypes = {};

export default ReviewsList;

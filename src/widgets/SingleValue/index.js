import React from 'react';

import Cell from '../../components/Cell';
import styles from './styles.css';

const SingleValue = ({
  heading,
  value,
}) => (
  <div className={styles.container}>
    <div className={styles.heading}>
      {heading}
    </div>
    <div className={styles.body}>
      {value}
    </div>
  </div>
);

export default SingleValue;

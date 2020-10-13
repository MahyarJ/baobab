import React from 'react';
import styles from './Card.module.sass';

const Card = (props) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};

export default Card;

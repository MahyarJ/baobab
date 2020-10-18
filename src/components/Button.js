import React from 'react';
import styles from './Button.module.sass';

const Button = (props) => {
  const { label, onClick } = props;
  return (
    <button className={styles.container} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

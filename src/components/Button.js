import React from 'react';
import styles from './Button.module.sass';

const Button = (props) => {
  const { label, onClick } = props;
  return (
    <section className={styles.container} onClick={onClick}>
      {label}
    </section>
  );
};

export default Button;

import React from 'react';
import styles from './Button.module.sass';

const Button = (props) => {
  const { label, onClick } = props;
  return (
    // We know because of A11Y we better use the input
    // but here for better styling I used a section tag
    <section className={styles.container} onClick={onClick}>
      {label}
    </section>
  );
};

export default Button;

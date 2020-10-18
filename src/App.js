import React from 'react';
import styles from './App.module.sass';
import ShowCase from './components/ShowCase';

const App = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>Baobab Tree Showcase</h1>
      </header>
      <main className={styles.main}>
        <ShowCase />
      </main>
    </>
  );
};

export default App;

import React from 'react';
import styles from './App.module.sass';
import useFetchTrees from './hooks/useFetchTrees'
import Card from './components/Card'

const App = () => {
  const { data, loading } = useFetchTrees();

  console.log(loading, data);
  return (
    <div>
      <header className={styles.header}>
        <h1>
          Baobab Tree Showcase
        </h1>
      </header>
      <main className={styles.main}>
        {loading
          ? <p>Loading...</p>
          : data?.trees?.map((tree, index) => {
            return (
              <Card key={index}>
                <h3>{tree.name}</h3>
                <h6>{tree.species_name}</h6>
              </Card>
            )
          })}
      </main>
    </div>
  );
}

export default App;

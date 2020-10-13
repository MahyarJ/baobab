import React from 'react';
import styles from './App.module.sass';
import useFetchTrees from './hooks/useFetchTrees'
import Card from './components/Card'
import TreeBox from './components/TreeBox'

const App = () => {
  const { data, loading } = useFetchTrees();

  console.log(loading, data);
  return (
    <div>
      <header className={styles.header}>
        <h1>Baobab Tree Showcase</h1>
      </header>
      <main className={styles.main}>
        {loading
          ? <p>Loading...</p>
          : data?.trees?.map(({name, species_name, image}, index) => {
            return (
              <Card key={index}>
                <TreeBox
                  title={name}
                  subtitle={species_name}
                  image={image}
                />
              </Card>
            )
          })}
      </main>
    </div>
  );
}

export default App;

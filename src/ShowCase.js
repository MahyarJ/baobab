import React from 'react';
import useFetchTrees from './hooks/useFetchTrees';
import Card from './components/Card';
import TreeBox from './components/TreeBox';

const ShowCase = () => {
  const { data, loading, error } = useFetchTrees();

  if (loading) return <>Loading...</>;
  if (error) return <>Fetching failed</>;

  return (
    <>
      {data?.trees?.map(({ name, species_name, image }, index) => {
        return (
          <Card key={index}>
            <TreeBox title={name} subtitle={species_name} image={image} />
          </Card>
        );
      })}
    </>
  );
};

export default ShowCase;

import React from "react";
import { useQueryAllPets } from "./hooks/useQueryAllPets/useQueryAllPets";

export const List = () => {
  const { loading, error, pets } = useQueryAllPets();
  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div>
        {pets.map(({id, name, weight}) => (
          <div key={id}>
              <span>Name: {name}</span>
              <span>Weight: {weight}</span>
          </div>
        ))}
      </div>
    </>
  );
};
import React from "react";
import { useAllAvailablePets } from "./hooks/useAllAvailablePets/useAllAvailablePets";

export const SpecialList = () => {
  const { getAllAvailablePets, loading, error, pets } = useAllAvailablePets();

  const loader = loading && <p>Loading...</p>;
  const errorJSX = error && <p>We have a problem: {error.message}</p>;
  const petsJSX =
    pets &&
    pets.map(({ id, name, weight }) => (
      <div key={id}>
        <span>Name: {name}</span>
        <span>Weight: {weight}</span>
      </div>
    ));

  return (
    <>
      <button onClick={() => getAllAvailablePets()}>Download</button>
      {loader}
      {errorJSX}
      {petsJSX}
    </>
  );
};

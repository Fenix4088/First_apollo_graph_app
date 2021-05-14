import React from "react";
import { useCheckIn } from "./hooks/useCheckIn/useCheckIn";

export const CheckInPet = () => {
  const { checkIn, pet, error } = useCheckIn();
    console.log(pet)
  const petJSX = pet && (
    <p>
      <p>Id: {pet.pet.id}</p>
      <p>Name: {pet.pet.name}</p>
    </p>
  );

  const errorJSX = error && <p>{error.message}</p>;

  return (
    <>
      <h3>Check In</h3>
      {petJSX}
      {errorJSX}
      <button onClick={() => checkIn("C-1")}>checkIn</button>
    </>
  );
};

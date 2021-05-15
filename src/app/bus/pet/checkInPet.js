import React, {useState} from "react";
import { useCheckIn } from "./hooks/useCheckIn/useCheckIn";
import { useCheckOut } from "./hooks/useCheckOut/useCheckOut";

export const CheckInPet = () => {
  const { checkIn, checkedInPet, checkInError, loading } = useCheckIn();
  const {
    checkOut,
    checkOutError,
    checkOutLoading,
    checkedOutPet,
  } = useCheckOut();

  const [petId, setPetId] = useState("")

  const pet = checkedInPet || checkedOutPet;

  const petJSX = pet && (
    <p>
      <p>Id: {pet.pet.id}</p>
      <p>Name: {pet.pet.name}</p>
    </p>
  );

  const error = checkInError || checkOutError;
  const errorJSX = error && <p>{error}</p>;

  if (loading || checkOutLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h3>Check In</h3>
      {petJSX}
      {errorJSX}
      <input value={petId} type="text" placeholder={"Pet ID"} onChange={(e) => setPetId(e.currentTarget.value)}/>
      <button onClick={() => checkIn(petId)}>checkIn</button>
      <button onClick={() => checkOut(petId)}>checkOut</button>
    </>
  );
};

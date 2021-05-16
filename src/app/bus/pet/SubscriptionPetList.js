import React from "react";
import { useSubscriptionPet } from "./hooks/useSubscriptionCustom/useSubscriptionPet";

export const SubscriptionPetList = () => {
  const { pet } = useSubscriptionPet();

  const petJSX = pet && (
    <ul>
      <li>Name: {pet.name}</li>
      <li>Name: {pet.id}</li>
    </ul>
  );
  return (
    <>
      <h1>Subscription List</h1>
      {petJSX}
    </>
  );
};

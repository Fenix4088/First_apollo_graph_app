import React from "react";
import { useSubscriptionPet } from "./hooks/useSubscriptionCustom/useSubscriptionPet";

export const SubscriptionPetList = () => {
  const { pet } = useSubscriptionPet();
  const petJSX = pet && (
    <ul>
      <li>Name: {pet.pet.name}</li>
      <li>Name: {pet.pet.id}</li>
    </ul>
  );
  return (
    <>
      <h1>Subscription List</h1>
        {petJSX}
    </>
  );
};
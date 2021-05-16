import { loader } from "graphql.macro";
import { useSubscription } from "@apollo/client";

const petSubscription = loader("./subscriptionReturnPet.graphql");

export const useSubscriptionPet = () => {
  const { loading, error, data } = useSubscription(petSubscription);
  const pet = data && data.petReturned.pet;
  return {
    pet,
  };
};
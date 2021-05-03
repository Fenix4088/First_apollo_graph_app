import { useQuery } from "@apollo/client";
import { loader } from "graphql.macro";

const queryAvailablePets = loader("./queryAllPets.graphql");

export const useQueryAllPets = () => {
  const { loading, error, data } = useQuery(queryAvailablePets);

  const pets = data ? data.allPets : null;

  return { loading, error, pets };
};
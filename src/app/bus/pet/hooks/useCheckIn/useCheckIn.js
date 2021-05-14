import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";

const mutationCheckIn = loader("./mutationCheckIn.graphql");

export const useCheckIn = () => {
  const [_checkIn, { loading, error, data }] = useMutation(mutationCheckIn);

  const checkIn = async (id) => {
    try {
      await _checkIn({ variables: { id } });
    } catch(err) {
      console.error(err.message)
    }
  };

  const pet = data && data.checkIn;

  return {
    checkIn,
    pet,
    error
  };
};

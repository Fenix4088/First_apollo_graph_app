import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const mutationCheckIn = loader("./mutationCheckIn.graphql");

export const useCheckIn = () => {
  const [_checkIn, { loading, error, data }] = useMutation(mutationCheckIn);
  const [checkInError, setCheckInError] = useState("");

  const checkIn = async (id) => {

    try {
      await _checkIn({ variables: { id } });
      setCheckInError("");
    } catch (err) {
      setCheckInError(err.message);

    }

  };

  const checkedInPet = data && data.checkIn;

  return {
    checkIn,
    checkedInPet,
    checkInError,
    loading,
  };
};

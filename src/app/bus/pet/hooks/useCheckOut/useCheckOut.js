import { useMutation } from "@apollo/client";
import { loader } from "graphql.macro";
import { useState } from "react";

const mutationCheckOut = loader("./mutationCheckOut.graphql");

export const useCheckOut = () => {
  const [_checkOut, { loading, error, data }] = useMutation(mutationCheckOut);
  const [checkOutError, setCheckOutError] = useState("");

  const checkOut = async (id) => {

    try {
      await _checkOut({
        variables: { id },
      });
      setCheckOutError("");
    } catch (err) {
      setCheckOutError(err.message);

    }

  };

  const checkedOutPet = data && data.checkOut;

  return {
    checkOut,
    checkOutLoading: loading,
    checkOutError,
    checkedOutPet,
  };
};

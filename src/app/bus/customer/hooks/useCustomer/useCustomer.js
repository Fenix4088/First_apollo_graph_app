import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const createAcc = loader("./mutationCreateAccount.graphql");

export const useCustomer = () => {
  const [createCustomer, { data }] = useMutation(createAcc);

  const [values, setValues] = useState({
    account: {
      name: "",
      username: "",
      password: "",
    },
  });

  const handleChange = (event) => {
    setValues((prevValues) => ({
      account: {
        ...prevValues.account,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const save = () => {
    const {account} = values;
    createCustomer({variables: {account}});
  };

  return {
    values,
    handleChange,
    save,
    createdAccount: data && data.createAccount
  };
};

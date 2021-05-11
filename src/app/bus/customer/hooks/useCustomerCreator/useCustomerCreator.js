import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";
import { useForm } from "../useForm/useForm";

const createAcc = loader("./mutationCreateAccount.graphql");

export const useCustomerCreator = () => {
  const [_save, { data }] = useMutation(createAcc);
  const { form, handleChange } = useForm({
    name: "",
    username: "",
    password: "",
  });

  const save = () => {
    _save({ variables: { account: form } });
  };

  return {
    form,
    handleChange,
    save,
    createdAccount: data && data.createAccount,
  };
};

import { useForm } from "../useForm/useForm";
import { loader } from "graphql.macro";
import { useMutation } from "@apollo/client";

const mutationLogIn = loader("./mutationLogin.graphql");

export const useCustomerAuth = () => {
  const [_logIn, { loading, error, data }] = useMutation(mutationLogIn);
  const { form, handleChange } = useForm({
    username: "",
    password: "",
  });
  console.log(data)

  const logIn = () => {
    console.log(form);
    _logIn({
      variables: form,
    });
  };

  return {
    handleChange,
    logIn,
    authorizedCustomer: data && data.logIn.customer,
  };
};
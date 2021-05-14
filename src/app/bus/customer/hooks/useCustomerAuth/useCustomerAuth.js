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

  const logIn = () => _logIn({ variables: form });

  const authorizedCustomer = data && data.logIn;
  const token = authorizedCustomer && authorizedCustomer.token;

  if (token) localStorage.setItem("token", JSON.stringify(token));

  return {
    handleChange,
    logIn,
    authorizedCustomer,
  };
};


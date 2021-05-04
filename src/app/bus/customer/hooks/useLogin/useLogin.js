import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

const { loader } = require("graphql.macro");

const queryLogin = loader("./queryLogin.graphql");

export const useLogin = () => {
  const [login, { loading, error, data }] = useMutation(queryLogin);
  const [loginData, setLoginData] = useState({
    loginFormData: {
      username: "yehor123",
      password: "123",
    },
  });

  useEffect(() => {
    const token = data && data.logIn.token;
    if (token) localStorage.setItem("token", JSON.stringify(token));
  }, [data]);

  const onChangeHandler = (event) => {
    setLoginData((prevValues) => ({
      loginFormData: {
        ...prevValues.loginFormData,
        [event.target.name]: event.target.value,
      },
    }));
  };

  const submitFrom = () => {
    const { username, password } = loginData.loginFormData;
    login({ variables: { username, password } });
  };

  return {
    onChangeHandler,
    submitFrom,
    loading,
    error,
    loginUserData: data && data.logIn,
    formData: loginData.loginFormData,
  };
};

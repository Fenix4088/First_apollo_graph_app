import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";

const { loader } = require("graphql.macro");

const queryLogin = loader("./queryLogin.graphql");

export const useForm = (initialValues) => {
  const [login, { loading, error, data }] = useMutation(queryLogin);
  const [form, setForm] = useState(initialValues);

  useEffect(() => {
    const token = data && data.logIn.token;
    if (token) localStorage.setItem("token", JSON.stringify(token));
  }, [data]);

  const handleChange = (event) => {
    setForm((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    form,
  };
};

import { useEffect, useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  // useEffect(() => {
  //   const token = data && data.logIn.token;
  //   if (token) localStorage.setItem("token", JSON.stringify(token));
  // }, [data]);

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

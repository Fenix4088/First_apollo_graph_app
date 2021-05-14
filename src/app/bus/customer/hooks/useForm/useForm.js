import { useEffect, useState } from "react";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

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

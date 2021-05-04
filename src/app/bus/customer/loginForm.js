import React from "react";
import { FormWrap } from "./customer";
import { useLogin } from "./hooks/useLogin/useLogin";

export const LoginForm = () => {
  const {
    onChangeHandler,
    submitFrom,
    loading,
    error,
    loginUserData,
    formData,
  } = useLogin();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <FormWrap>
      <div>Login</div>
      <input
        onChange={onChangeHandler}
        type="text"
        name={"username"}
        placeholder={"username"}
        value={formData.username}
      />
      <input
        onChange={onChangeHandler}
        type="password"
        name={"password"}
        placeholder={"password"}
        value={formData.password}
      />
      <button onClick={submitFrom} type={"submit"}>
        Login
      </button>
      {loginUserData ? (
        <div style={{ color: "green" }}>Welcome {loginUserData.customer.name}</div>
      ) : null}
    </FormWrap>
  );
};

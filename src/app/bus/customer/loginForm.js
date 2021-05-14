import React from "react";
import { FormWrap } from "./customer";
import { useCustomerAuth } from "./hooks/useCustomerAuth/useCustomerAuth";

export const LoginForm = () => {
  const {handleChange, logIn, authorizedCustomer} = useCustomerAuth();

  const authorizedCustomerJSX = authorizedCustomer && (
      <>
          <p>
              Authorized customer: {authorizedCustomer.customer.username}
          </p>
      </>
  )

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{error.message}</p>;
  return (
    <FormWrap>
      <div>Login</div>
      <input
        onChange={handleChange}
        type="text"
        name={"username"}
        placeholder={"username"}
        // value={formData.username}
      />
      <input
        onChange={handleChange}
        type="password"
        name={"password"}
        placeholder={"password"}
        // value={formData.password}
      />
      <button onClick={logIn} type={"submit"}>
        Login
      </button>
      {authorizedCustomerJSX}
    </FormWrap>
  );
};

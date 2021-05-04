import React from "react";
import { List } from "./list";
import styled from "styled-components";
import { useCustomer } from "./hooks/useCustomer/useCustomer";
import {LoginForm} from "./loginForm";

export const Customer = () => {
  const { values, handleChange, save, createdAccount} = useCustomer();
  return (
    <Wrapper>
        <LoginForm/>
        <FormWrap>
            <span>Sing in</span>
            <input type="text" placeholder={"name"} name={"name"} onChange={handleChange}/>
            <input type="text" placeholder={"username"} name={"username"} onChange={handleChange}/>
            <input type="password" placeholder={"password"} name={"password"} onChange={handleChange}/>
            <button type={"submit"} onClick={save}>Save</button>
            <div>{createdAccount ? createdAccount.name : ""}</div>
        </FormWrap>
        <List />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

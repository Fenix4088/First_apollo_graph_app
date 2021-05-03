import React from "react";
import { client } from "./init/client";
import { ApolloProvider } from "@apollo/client";
import { Pet } from "./bus/pet/pet";
import { Customer } from "./bus/customer/customer";
import styled from "styled-components"

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Wrapper>
        <Pet />
        <Customer />
      </Wrapper>
    </ApolloProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;


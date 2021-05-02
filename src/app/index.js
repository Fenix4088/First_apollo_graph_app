import React from "react";
import { client } from "./init/client";
import { ApolloProvider } from "@apollo/client";
import {Pet} from "./bus/pet/pet";

export const App = () => {
  return <ApolloProvider client={client}>
    <Pet/>
  </ApolloProvider>;
};
import {ApolloClient, createHttpLink, InMemoryCache, split} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import {WebSocketLink} from "@apollo/client/link/ws";
import {getMainDefinition} from "@apollo/client/utilities";

const uri = "https://funded-pet-library.moonhighway.com/";

const link = createHttpLink( {
  uri
})

const wsLink = new WebSocketLink({
  uri: "wss://funded-pet-library.moonhighway.com/graphql",
  options: {
    reconnect: true
  }
});

const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
      );
    },
    wsLink,
    link,
);

// auth
const authLink = setContext((_, {headers}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});


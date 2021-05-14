import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const uri = "https://funded-pet-library.moonhighway.com/";

const link = createHttpLink( {
  uri
})

// auth
const authLink = setContext((_, {headers}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  console.log(token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

export const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});


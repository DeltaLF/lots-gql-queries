import { ApolloClient, DefaultOptions, InMemoryCache } from "@apollo/client";

const URI = "http://localhost:4000/";

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

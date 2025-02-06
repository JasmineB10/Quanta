import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink, HttpLink, DefaultOptions } from '@apollo/client';

export const BASE_URL = 
  process.env.NODE_ENV !== "development"
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

  const httpLink = new HttpLink({
    uri: `${BASE_URL}/api/graphql`
    // Additional options
  });

  const defaultOptions : DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    mutate: {
      fetchPolicy: "no-cache",
      errorPolicy: 'all',
    },
  };
  
  const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions
  });

  export default client;

  
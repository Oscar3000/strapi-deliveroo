import ApolloClient, { HttpLink, InMemoryCache } from "apollo-boost";
import { withApollo } from "next-apollo";

export const config = new ApolloClient({
    uri: "http://localhost:1337/graphql",
    cache: new InMemoryCache()
  });

export default withApollo(config);
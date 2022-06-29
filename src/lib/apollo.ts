import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl4uf77tf0vdd01uoeody8902/master',
  cache: new InMemoryCache()
});
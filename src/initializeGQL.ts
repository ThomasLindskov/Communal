import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const initializeGQL = () => {
  const httpLink = createHttpLink({
    uri: "https://parseapi.back4app.com/graphql",
  });

  const authLink = setContext(() => {
    return {
      headers: {
        "X-Parse-Application-Id": process.env.REACT_APP_ID,
        "X-Parse-Master-Key": process.env.REACT_APP_Master_Key, // optional?
        "X-Parse-Client-Key": process.env.REACT_APP_Client_Key,
      },
    };
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return apolloClient;
};

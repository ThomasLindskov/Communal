import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const initializeGQL = () => {
  const httpLink = createHttpLink({
    uri: "https://parseapi.back4app.com/graphql",
  });

  const authLink = setContext(() => {
    if (localStorage.getItem("token")) {
      return {
        headers: {
          "X-Parse-Application-Id": process.env.REACT_APP_ID,
          "X-Parse-Client-Key": process.env.REACT_APP_Client_Key,
          "X-Parse-Session-Token": localStorage.getItem("token"),
        },
      };
    } else {
      return {
        headers: {
          "X-Parse-Application-Id": process.env.REACT_APP_ID,
          "X-Parse-Client-Key": process.env.REACT_APP_Client_Key,
        },
      };
    }
  });

  const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return apolloClient;
};

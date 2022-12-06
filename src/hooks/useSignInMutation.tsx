import { gql, useMutation } from "@apollo/client";

const SIGN_IN = gql`
  mutation logIn($input: LogInInput!) {
    logIn(input: $input) {
      viewer {
        user {
          id
          username
          email
        }
        sessionToken
      }
    }
  }
`;

export const useSignInMutation = () => {
  const [signIn, { data, loading, error }] = useMutation(SIGN_IN);

  return {
    signIn,
    data,
    loading,
    error,
  };
};

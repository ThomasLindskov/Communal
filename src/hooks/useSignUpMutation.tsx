import { gql, useMutation } from "@apollo/client";

const SIGN_UP = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(input: $input) {
      viewer {
        user {
          id
          createdAt
          username
          email
        }
        sessionToken
      }
    }
  }
`;

export const useSignUpMutation = () => {
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);

  return {
    signUp,
    data,
    loading,
    error,
  };
};

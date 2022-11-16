import { gql, useMutation } from "@apollo/client";

const Sign_UP = gql`
  # TODO: what is SignUpInput?
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
  const [signUp, { data, loading, error }] = useMutation(Sign_UP);

  return {
    signUp,
    data,
    loading,
    error,
  };
};

import { gql, useMutation } from "@apollo/client";

const RESET_PASSWORD = gql`
  # TODO: what is ResetPasswordInput?
  mutation resetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      ok
    }
  }
`;

export const useResetPasswordMutation = () => {
  const [resetPassword, { data, loading, error }] = useMutation(RESET_PASSWORD);

  return {
    resetPassword,
    data,
    loading,
    error,
  };
};

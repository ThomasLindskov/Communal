import { gql, useMutation } from "@apollo/client";

const RESET_PASSWORD = gql`
  mutation resetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      ok
    }
  }
`;

export const useResetPasswordMutation = () => {
  const [resetPassword, { loading }] = useMutation(RESET_PASSWORD);

  return {
    resetPassword,
    loading,
  };
};

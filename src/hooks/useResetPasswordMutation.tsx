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
  const [resetPassword] = useMutation(RESET_PASSWORD);

  return {
    resetPassword,
  };
};

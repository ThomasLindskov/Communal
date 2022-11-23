import { gql, useMutation } from "@apollo/client";

const DeleteUser = gql`
  mutation DeleteObject($input: DeleteUserInput!) {
    deleteUser(input: $input) {
      user {
        id
      }
    }
  }
`;

export const useDeleteUserQuery = () => {
  const [deleteUser, { loading, error }] = useMutation(DeleteUser);

  return {
    deleteUser,
    loading,
    error,
  };
};

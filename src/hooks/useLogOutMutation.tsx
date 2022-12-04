import { gql, useMutation } from "@apollo/client";

const LOGOUT = gql`
  mutation logOutButton {
    logOut(input: { clientMutationId: "LogOut" }) {
      clientMutationId
    }
  }
`;

export const useLogOutMutation = () => {
  const [logOut, { loading, error, client }] = useMutation(LOGOUT);

  return {
    logOut,
    loading,
    error,
    client
  };
};

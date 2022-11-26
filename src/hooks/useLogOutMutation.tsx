import { gql, useMutation } from "@apollo/client";

const LOGOUT = gql`
  mutation logOutButton {
    logOut(input: { clientMutationId: "LogOut" }) {
      clientMutationId
    }
  }
`;

export const useLogOutMutation = () => {
  const [logOut, { loading, error }] = useMutation(LOGOUT);

  if (!loading && !error) {
    localStorage.setItem("loggingOut", "true");
  }

  return {
    logOut,
    loading,
    error,
  };
};

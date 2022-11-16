import { gql, useMutation } from "@apollo/client";

const LOGOUT = gql`
mutation logOutButton {
	logOut(input: { clientMutationId: "LogOut" }) {
		clientMutationId
	}
}
`;

export const useLogOutMutation = () => {
  const [logOut, { data, loading, error }] = useMutation(LOGOUT);

  return {
    logOut,
    data,
    loading,
    error,
  };
};

import { gql, useMutation } from "@apollo/client";

const UpdateUser = gql`
  mutation UpdateObject($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        updatedAt
      }
    }
  }
`;

export const useEditProfileMutation = () => {
  const [editProfile, { data, loading, error }] = useMutation(UpdateUser);
  return {
    editProfile,
    data,
    loading,
    error,
  };
};

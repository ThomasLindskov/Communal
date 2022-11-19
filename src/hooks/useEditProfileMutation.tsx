import { gql, useMutation } from "@apollo/client";

const UpdateObject = gql`
mutation UpdateObject($input: UpdateUserInput!) {
    updateUser(input: $input){
      user{
        updatedAt
      }
    }
  }
`;

export const useEditProfileMutation = () => {
  const [editProfile, { data, loading, error }] = useMutation(UpdateObject);
  return {
    editProfile,
    data,
    loading,
    error,
  };
};

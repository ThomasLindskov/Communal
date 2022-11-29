import { gql, useMutation } from "@apollo/client";

//TODO: Figure out how to do the mutation to add a file to a user
const UploadImage = gql`
  mutation UpdateObject($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        updatedAt
      }
    }
  }
`;

export const useUploadImageMutation = () => {
  const [uploadImage, { data, loading, error }] = useMutation(UploadImage);
  return {
    uploadImage,
    data,
    loading,
    error,
  };
};
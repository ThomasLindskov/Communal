import { gql, useMutation } from "@apollo/client";

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

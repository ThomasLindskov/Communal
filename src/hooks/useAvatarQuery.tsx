import { gql, useQuery } from "@apollo/client";

const fetchImage = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      image_url
    }
  }
`;

export const useAvatarQuery = () => {
  const userId = localStorage.getItem("currentUserObjectId");

  const { data, loading, error } = useQuery(fetchImage, {
    variables: { id: userId },
  });

  return {
    data,
    loading,
    error,
  };
};

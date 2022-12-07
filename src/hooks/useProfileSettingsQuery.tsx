import { ApolloError, gql, useQuery } from "@apollo/client";
import { IEditProfileFormInput } from "src/pages/editProfilePage/validationSchemas/EditProfileForm";

const fetchUser = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      username
      email
      address
    }
  }
`;

export const useProfileSettingsQuery = (
  setValue: (key: keyof IEditProfileFormInput, value: string) => void
): {
  data: { user: IEditProfileFormInput };
  loading: boolean;
  error: ApolloError | undefined;
} => {
  const { data, loading, error } = useQuery(fetchUser, {
    variables: { id: localStorage.getItem("currentUser") },
    fetchPolicy: "network-only", // To force reload of data when returning to page
    onCompleted: (data) => {
      for (const [key, value] of Object.entries(data.user)) {
        setValue(
          key as keyof IEditProfileFormInput,
          value as unknown as string
        );
      }
    },
  });

  return {
    data,
    loading,
    error,
  };
};

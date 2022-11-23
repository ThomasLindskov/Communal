import { ApolloError, gql, useQuery } from "@apollo/client";
import { IEditProfileFormInput } from "src/pages/editProfilePage/validationSchemas/EditProfileForm";

const fetchUser = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      username
      email
      address
      neighborhood
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
    onCompleted: (data) => {
      for (const [key, value] of Object.entries(data.user)) {
        console.log(key, value);

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

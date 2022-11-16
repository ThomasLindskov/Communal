import React from "react";
import { useSignUpMutation } from "src/hooks/useSignUpMutation";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardLink } from "../../components/CardLink";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../theme";
import { forms, ChangeURL } from "./FormContainer";

export const SignUpForm = ({
  setForm,
}: {
  setForm: (value: forms) => void;
}) => {
  // add query hook here

  const input = {
    fields: {
      username: "pvb",
      password: "password",
      email: "pvburleigh@gmail.com",
    },
  };

  const { signUp, data, loading, error } = useSignUpMutation();
  console.log(data, loading, error);

  // TODO: add form-validation using react-hook-form

  return (
    <Card width="300px">
      <div style={{ width: "100%" }}>
        <CardTitle children="Create account" />
      </div>
      <InputField label="Email" id="email" type="text" placeholder="Email" />
      <InputField
        label="Password"
        id="password"
        type="password"
        placeholder="Password"
      />
      <InputField
        label="Repeat password"
        id="repeatPassword"
        type="password"
        placeholder="Repeat password"
      />
      <InputField
        label="Street name and number"
        id="street"
        type="text"
        placeholder="Street name and number"
      />
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "300px",
        }}
      >
        <InputField
          label="Zip code"
          id="zip"
          type="number"
          placeholder="Zip code"
          style={{ div: { width: "30%" } }}
        />
        <InputField
          label="City"
          id="city"
          type="text"
          placeholder="City"
          style={{ div: { width: "100%" } }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button
          color={theme.colors.cta}
          type="button"
          onClick={() => signUp({ variables: { input } })}
        >
          Create account
        </Button>
      </div>
      <div
        style={{
          padding: `${theme.padding.small} 0`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <CardLink
          onClick={() => {
            setForm(forms.SignIn);
            ChangeURL(forms.SignIn);
          }}
        >
          Back to login
        </CardLink>
      </div>
    </Card>
  );
};

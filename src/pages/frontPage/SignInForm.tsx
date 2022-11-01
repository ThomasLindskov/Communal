import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardLink } from "../../components/CardLink";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../components/theme";
import { forms } from "./FormContainer";

export const SignInForm = ({
  setForm,
}: {
  setForm: (value: forms) => void;
}) => (
  <Card width="300px">
    <div style={{ width: "100%" }}>
      <CardTitle>Login</CardTitle>
    </div>
    <InputField
      id="username"
      type="text"
      placeholder="Username"
      label="Username"
    />
    <InputField
      id="password"
      type="password"
      placeholder="Password"
      label="Password"
    />
    <Button color={theme.colors.cta}>Login</Button>
    <div
      style={{
        padding: `${theme.padding.small} 0`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <CardLink onClick={() => setForm(forms.SignUp)}>Sign up</CardLink>
      <CardLink onClick={() => setForm(forms.ForgotPassword)}>
        Forgot Password?
      </CardLink>
    </div>
  </Card>
);

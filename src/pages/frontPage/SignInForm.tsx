import React from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../components/theme";
import { ChangeURL, forms } from "./FormContainer";

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
    <p onClick={() => { setForm(forms.SignUp); ChangeURL(forms.SignUp) }} style={theme.link}>
      Sign up
    </p>
    <p onClick={() => { setForm(forms.ForgotPassword); ChangeURL(forms.ForgotPassword) }} style={theme.link}>
      Forgot Password?
    </p>
  </Card>
);

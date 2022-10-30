import React from "react";
import Logo from "../../assets/svgComponents/Logo";
import { ForgotPassword } from "./ForgotPassword";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export enum forms {
  SignIn,
  SignUp,
  ForgotPassword,
}

export default function FormContainer() {
  const [form, setForm] = React.useState<forms>(forms.SignIn);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Logo />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {form === forms.SignIn ? (
          <SignInForm setForm={setForm} />
        ) : form === forms.ForgotPassword ? (
          <ForgotPassword setForm={setForm} />
        ) : (
          <SignUpForm setForm={setForm} />
        )}
      </div>
    </div>
  );
}

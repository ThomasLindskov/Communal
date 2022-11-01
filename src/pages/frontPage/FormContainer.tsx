import React from "react";
import Logo from "../../assets/svgComponents/Logo";
import { theme } from "../../components/theme";
import { ForgotPassword } from "./ForgotPassword";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";

export enum forms {
  SignIn,
  SignUp,
  ForgotPassword,
}

const containerPadding = 50;

export default function FormContainer() {
  const [form, setForm] = React.useState<forms>(forms.SignIn);
  return (
    <div
      style={{
        padding: `${containerPadding}px`,
        height: `calc(100% - ${containerPadding * 2}px);`,
      }}
    >
      {/* The height of the logo is 110px ish */}
      <div style={{ marginBottom: "10px" }}>
        <Logo />
      </div>
      <div style={{ height: "calc(100% - 120px)", display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: theme.utils.borderRadius,
              overflowY: "auto",
              filter: `drop-shadow(${theme.utils.dropShadow})`,
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
      </div>
    </div>
  );
}

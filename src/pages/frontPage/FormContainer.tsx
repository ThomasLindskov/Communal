import React from "react";
import Logo from "../../assets/svgComponents/Logo";
import { theme } from "../../theme";
import { ForgotPassword } from "./ForgotPassword";
import { SignInForm } from "./SignInForm";
import { SignUpForm } from "./SignUpForm";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export enum forms {
  SignIn,
  SignUp,
  ForgotPassword,
}

const formMap = {
  [forms.SignIn]: <SignInForm />,
  [forms.SignUp]: <SignUpForm />,
  [forms.ForgotPassword]: <ForgotPassword />,
};

const containerPadding = 50;

export default function FormContainer({ form }: { form: forms }) {
  return (
    <div
      style={{
        padding: `${containerPadding}px`,
        height: `calc(100% - ${containerPadding * 2}px)`,
      }}
    >
      {/* The height of the logo is 110px ish */}
      <div style={{ marginBottom: "10px" }}>
        <Link to="/">
          <Logo color={theme.colors.primary} />
        </Link>
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
            {formMap[form]}
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 10000,
        }}
      />
    </div>
  );
}

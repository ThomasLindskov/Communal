import React from "react";
import Logo from "../../assets/svgComponents/Logo";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
export default function FormContainer() {
  const [signIn, setForm] = React.useState(false);
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
        {signIn ? (
          <SignInForm setForm={setForm} />
        ) : (
          <SignUpForm setForm={setForm} />
        )}
      </div>
    </div>
  );
}

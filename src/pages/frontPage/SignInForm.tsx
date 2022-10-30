import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { InputField } from "../../components/InputField";
import { theme } from "../../components/theme";

export default function SignInForm({
  setForm,
}: {
  setForm: (value: boolean) => void;
}) {
  const [signIn, setSignIn] = useState(true);
  // setForm(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {

        signIn ? (<Card>
          <InputField
            id="username"
            type="text"
            placeholder="Username"
          />
          <InputField
            id="password"
            type="password"
            placeholder="Password"
          />
          <Button
            color={theme.colors.cta}
          >Login</Button>
          <Link style={{ color: theme.colors.primary }} to="/SignUp">Sign Up</Link>
          {/* Add SignUp form here */}
          <p onClick={() => setSignIn(false)} style={theme.link}>Forgot Password?</p>
        </Card>
        ) : (
          <Card>
            <InputField
              label="Email*"
              id="email"
              type="email"
              placeholder="Email"
            />
            <Button
              color={theme.colors.cta}
            >
              Reset password
            </Button>
            <p onClick={() => setSignIn(true)} style={theme.link} >Back to login</p>
          </Card>)}
    </div>
  );
}

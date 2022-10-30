import React from "react";
import { Button } from "../../component/Button";
import { Card } from "../../component/Card";
import { CardTitle } from "../../component/CardTitle";
import { InputField } from "../../component/InputField";
import { theme } from "../../component/theme";
import { forms } from "./FormContainer";

export const SignUpForm = ({
  setForm,
}: {
  setForm: (value: forms) => void;
}) => {
  return (
    <Card width="300px">
      <div style={{ width: "100%" }}>
        <CardTitle children="Create account" />
      </div>
      <InputField
        label="Email"
        id="email"
        type="text"
        placeholder="Insert email"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px 0px",
          width: "100%",
        }}
      >
        <InputField
          label="Street name and number"
          id="street"
          type="text"
          placeholder="Insert street name and number"
        />
        <InputField
          label="Zip code"
          id="zip"
          type="number"
          placeholder="Insert zip code (four digits)"
        />
        <InputField
          label="City"
          id="city"
          type="text"
          placeholder="Insert city"
        />
      </div>
      <InputField
        label="Password"
        id="password"
        type="password"
        placeholder="Insert password"
      />
      <InputField
        label="Repeat password"
        id="repeatPassword"
        type="password"
        placeholder="Repeat password"
      />
      <div style={{ marginTop: "20px" }}>
        <Button
          color={theme.colors.cta}
          type="button"
          onClick={() => alert("Button clicked")}
        >
          Create account
        </Button>
      </div>
      <p onClick={() => setForm(forms.SignIn)} style={theme.link}>
        Login
      </p>
    </Card>
  );
};

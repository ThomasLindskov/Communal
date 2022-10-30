import React from "react";
import { Card } from "../../components/Card";
import { InputField } from "../../components/InputField";

export default function SignUpForm({
  setForm,
}: {
  setForm: (value: boolean) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Card>
        <p>Create account</p>
        <InputField
          label="Email"
          id="email"
          type="text"
          placeholder="Insert email"
        />
      </Card>
    </div>
  );
}

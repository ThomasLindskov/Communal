import React from "react";
import { Card } from "../../components/Card";
import { InputField } from "../../components/InputField";

export default function SignInForm({
  setForm,
}: {
  setForm: (value: boolean) => void;
}) {
  // setForm(false);
  return (
    <div>
      <Card>
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

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardLink } from "../../components/CardLink";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../theme";
import { forms } from "./FormContainer";

export const ForgotPassword = ({
  setForm,
}: {
  setForm: (value: forms) => void;
}) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Card width="300px">
      <div style={{ width: "100%" }}>
        <CardTitle>Reset password</CardTitle>
      </div>
      <InputField label="Email" id="email" type="email" placeholder="Email" />
      <Button color={theme.colors.cta}>Reset password</Button>
      <div
        style={{
          padding: `${theme.padding.small} 0`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <CardLink onClick={() => setForm(forms.SignIn)}>Back to login</CardLink>
      </div>
    </Card>
  </div>
);

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { InputField } from "../../components/InputField";
import { theme } from "../../components/theme";
import { forms } from "./FormContainer";

export const ForgotPassword = ({
  setForm,
}: {
  setForm: (value: forms) => void;
}) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Card width="300px">
      <InputField label="Email*" id="email" type="email" placeholder="Email" />
      <Button color={theme.colors.cta}>Reset password</Button>
      <p onClick={() => setForm(forms.SignIn)} style={theme.link}>
        Back to login
      </p>
    </Card>
  </div>
);

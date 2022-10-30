import { Button } from "../../component/Button";
import { Card } from "../../component/Card";
import { InputField } from "../../component/InputField";
import { theme } from "../../component/theme";
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

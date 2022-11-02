import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../components/theme";
import { ChangeURL, forms } from "./FormContainer";

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
      <InputField label="Email*" id="email" type="email" placeholder="Email" />
      <Button color={theme.colors.cta}>Reset password</Button>
      <p className='signin' onClick={() => {setForm(forms.SignIn); ChangeURL(forms.SignIn)}} style={theme.link}>
        Back to login
      </p>
    </Card>
  </div>
);

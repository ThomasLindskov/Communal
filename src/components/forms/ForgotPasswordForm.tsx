import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Card } from "../Card";
import { CardLink } from "../CardLink";
import { CardTitle } from "../CardTitle";
import { InputField } from "../InputField";
import { useResetPasswordMutation } from "../../hooks/useResetPasswordMutation";
import { theme } from "../../theme";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  IForgotPasswordInput,
  forgotPasswordSchema,
} from "./validationSchemas/ForgotPassword";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";

export const ForgotPasswordForm = () => {
  const { resetPassword, loading } = useResetPasswordMutation();
  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<IForgotPasswordInput>({
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<IForgotPasswordInput> = (inputData) => {
    const input = {
      email: inputData.email,
    };
    resetPassword({
      variables: { input },
    });
    setTimeout(() => {
      toast(
        "If an account with that email exists, you will receive an email with instructions on how to reset your password.",
        {
          style: {
            background: theme.colors.background,
            color: theme.colors.primary,
          },
        }
      );
      setValue("email", "");
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card width="300px">
          <div style={{ width: "100%" }}>
            <CardTitle>Reset password</CardTitle>
          </div>
          <InputField
            label="Email"
            id="email"
            type="email"
            placeholder="Email"
            register={register("email")}
            errorMessage={errors.email?.message}
          />
          <Button color={theme.colors.cta} type="submit" disabled={loading}>
            Reset password
          </Button>
          <div
            style={{
              padding: `${theme.padding.small} 0`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: theme.flexGap.medium,
            }}
          >
            <Link to="/">
              <CardLink selected={true}>Back to login</CardLink>
            </Link>
          </div>
        </Card>
      </div>
    </form>
  );
};

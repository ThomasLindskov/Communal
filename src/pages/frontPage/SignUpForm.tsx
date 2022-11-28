import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardLink } from "../../components/CardLink";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { useSignUpMutation } from "../../hooks/useSignUpMutation";
import { theme } from "../../theme";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { ISignUpFormInput, signUpSchema } from "./validationSchemas/SignUpForm";
import toast from "react-hot-toast";
export const SignUpForm = () => {
  const { signUp, data, loading, error } = useSignUpMutation();
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISignUpFormInput>({ resolver: yupResolver(signUpSchema) });

  const onSubmit: SubmitHandler<ISignUpFormInput> = (inputData) => {
    const input = {
      fields: {
        username: inputData.username,
        password: inputData.password,
        email: inputData.email,
        address: inputData.address,
        neighborhood: inputData.address.zipCode,
      },
    };
    signUp({
      variables: { input },
    });
    if (error) {
      toast(error.message);
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("token", data?.signUp?.viewer?.sessionToken);
      navigate("/chats");
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card width="300px">
        <div style={{ width: "100%" }}>
          <CardTitle children="Create account" />
        </div>
        <InputField
          label="Username"
          id="username"
          type="text"
          placeholder="Username"
          register={register("username")}
          errorMessage={errors.username?.message}
        />
        <InputField
          label="Email"
          id="email"
          type="text"
          placeholder="Email"
          register={register("email")}
          errorMessage={errors.email?.message}
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          register={register("password")}
          errorMessage={errors.password?.message}
        />
        <InputField
          label="Repeat password"
          id="repeatPassword"
          type="password"
          placeholder="Repeat password"
          register={register("confirmPassword")}
          errorMessage={errors.confirmPassword?.message}
        />
        <InputField
          label="Street name and number"
          id="street"
          type="text"
          placeholder="Street name and number"
          register={register("address.street")}
          errorMessage={errors.address?.street?.message}
        />
        <div
          style={{
            display: "flex",
            gap: theme.flexGap.medium,
            width: "300px",
          }}
        >
          <InputField
            label="Zip code"
            id="zip"
            type="number"
            placeholder="Zip code"
            style={{ div: { width: "30%" } }}
            register={register("address.zipCode")}
            errorMessage={errors.address?.zipCode?.message}
          />
          <InputField
            label="City"
            id="city"
            type="text"
            placeholder="City"
            style={{ div: { width: "100%" } }}
            register={register("address.city")}
            errorMessage={errors.address?.city?.message}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button color={theme.colors.cta} type="submit" disabled={loading}>
            Create account
          </Button>
        </div>
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
            <CardLink>Back to login</CardLink>
          </Link>
        </div>
      </Card>
    </form>
  );
};

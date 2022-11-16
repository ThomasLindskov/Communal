import React from "react";
import { useSignUpMutation } from "src/hooks/useSignUpMutation";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { CardLink } from "../../components/CardLink";
import { CardTitle } from "../../components/CardTitle";
import { InputField } from "../../components/InputField";
import { theme } from "../../theme";
import { forms, ChangeURL } from "./FormContainer";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ISignUpFormInput,
  signUpSchema,
} from "src/pages/frontPage/validationSchemas/SignUpForm";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export const SignUpForm = ({
  setForm,
}: {
  setForm: (value: forms) => void;
}) => {
  const { signUp, data, loading, error } = useSignUpMutation();
  const {
    register,
    formState: { errors }, // TODO: render errors with helpertext (awaiting @pvburleigh)
    handleSubmit,
  } = useForm<ISignUpFormInput>({ resolver: yupResolver(signUpSchema) });

  const onSubmit: SubmitHandler<ISignUpFormInput> = (inputData) => {
    const input = {
      fields: {
        username: inputData.username,
        password: inputData.password,
        email: inputData.email,
        address: inputData.address,
      },
    };
    signUp({
      variables: { input },
      onCompleted: () => {
        localStorage.setItem("token", data.signUp.viewer.sessionToken);
        // Navigate(N);
      },
    });
  };

  //console.log(error?.message);
  // do something with the error

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
        />
        <InputField
          label="Email"
          id="email"
          type="text"
          placeholder="Email"
          register={register("email")}
        />
        <InputField
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          register={register("password")}
        />
        <InputField
          label="Repeat password"
          id="repeatPassword"
          type="password"
          placeholder="Repeat password"
          register={register("confirmPassword")}
        />
        <InputField
          label="Street name and number"
          id="street"
          type="text"
          placeholder="Street name and number"
          register={register("address.street")}
        />
        <div
          style={{
            display: "flex",
            gap: "10px",
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
          />
          <InputField
            label="City"
            id="city"
            type="text"
            placeholder="City"
            style={{ div: { width: "100%" } }}
            register={register("address.city")}
          />
        </div>
        <div style={{ marginTop: "20px" }}>
          <p>{error?.message}</p>
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
            gap: "10px",
          }}
        >
          <CardLink
            onClick={() => {
              setForm(forms.SignIn);
              ChangeURL(forms.SignIn);
            }}
          >
            Back to login
          </CardLink>
        </div>
      </Card>
    </form>
  );
};

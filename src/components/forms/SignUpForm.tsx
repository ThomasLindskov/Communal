import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Card } from "../Card";
import { CardLink } from "../CardLink";
import { CardTitle } from "../CardTitle";
import { InputField } from "../InputField";
import { useSignUpMutation } from "../../hooks/useSignUpMutation";
import { theme } from "../../theme";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { ISignUpFormInput, signUpSchema } from "./validationSchemas/SignUpForm";
import toast from "react-hot-toast";
import { Select } from "../Select";

const zipCodes: { [key: string]: any } = require("src/assets/zipCodes.json");

export const SignUpForm = () => {
  const [zip, setZip] = useState("");
  const { signUp, loading } = useSignUpMutation();
  const navigate = useNavigate();
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
        address: {
          city: getCity(zip),
          zipCode: inputData.address.zipCode,
          street: inputData.address.street,
        },
        neighborhood: inputData.address.zipCode,
        // default image
        image_url:
          "https://as2.ftcdn.net/v2/jpg/03/08/71/39/1000_F_308713928_WsOJijzljhJuJcWX9fof9gWHBPuYWwcs.jpg",
      },
    };
    signUp({
      variables: { input },
      onCompleted: (data) => {
        toast.success("Account created successfully");
        localStorage.setItem("token", data?.signUp?.viewer?.sessionToken);
        setTimeout(() => {
          navigate("/chats");
        }, 1000);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  const changeZip = (e: any) => {
    setZip(e.target.value);
  };

  const getCity = (zip: string) => {
    return zipCodes[zip];
  };

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
            width: "400px",
          }}
        >
          <Select
            label="Zip code"
            id="zip"
            style={{ div: { width: "30%" } }}
            register={register("address.zipCode")}
            errorMessage={errors.address?.zipCode?.message}
            onChange={changeZip}
          >
            <option>Zip</option>
            {Object.keys(zipCodes).map((key: string) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
          </Select>

          <InputField
            label="City"
            id="city"
            type="text"
            placeholder={getCity(zip) ?? "Please select a zip code"}
            value={getCity(zip)}
            style={{ div: { width: "100%" } }}
            register={register("address.city")}
            readOnly={true}
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
            <CardLink selected={true}>Back to login</CardLink>
          </Link>
        </div>
      </Card>
    </form>
  );
};

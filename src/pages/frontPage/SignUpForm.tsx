import React, { useEffect, useState } from "react";
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
import { getGroupChats } from "src/parse/getGroupChats";
import { createGroupChat } from "src/parse/createGroupChat";
import { getObject } from "src/parse/getObject";
import { Select } from "src/components/Select";

const zipCodes: { [key: string]: any } = require("src/assets/zipCodes.json");

export const SignUpForm = () => {
  let [zip, setZip] = useState("");
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

  const assignGroupChat = async (userId: string) => {
    let chats = await getGroupChats();
    const user = await getObject("User", userId);
    if (user) {
      if (chats && chats.length === 0) {
        const address = user.get("address");
        const zipCode = address.zipCode;
        await createGroupChat("General", zipCode);
        await createGroupChat("Help", zipCode);
        await createGroupChat("Vacations", zipCode);
        chats = await getGroupChats();
      }
      if (chats) {
        for (const chat of chats) {
          const chatRelation = chat.relation("users");
          chatRelation.add([user]);
          await chat.save();
        }
      }
    }
  };
 
  const changeZip = (e: any) => {
    setZip(e.target.value);
  };

  const getCity = (zip: string) => {
    return zipCodes[zip];
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
          <Select
            label="Zip code"
            id="zip"
            style={{ div: { width: "30%" } }}
            register={register("address.zipCode")}
            errorMessage={errors.address?.zipCode?.message} 
            onChange={changeZip}          
            >
            <option key={0} value={0}>
              Zip
            </option>
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
            placeholder={getCity(zip)}
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
            <CardLink>Back to login</CardLink>
          </Link>
        </div>
      </Card>
    </form>
  );
};

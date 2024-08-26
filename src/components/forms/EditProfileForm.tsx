import React, { useState } from "react";
import { Button } from "../Button";
import { CardTitle } from "../CardTitle";
import { InputField } from "../InputField";
import { theme } from "../../theme";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    editProfileSchema,
    IEditProfileFormInput,
} from "./validationSchemas/EditProfileForm";
import { useEditProfileMutation } from "src/hooks/useEditProfileMutation";
import { useProfileSettingsQuery } from "src/hooks/useProfileSettingsQuery";
import toast from "react-hot-toast";
import { Select } from "src/components/Select";


export const EditProfileForm = () => {
    const zipCodes: { [key: string]: any } = require("src/assets/zipCodes.json");
    const [zip, setZip] = useState("");
    const { editProfile, loading: submitLoading } = useEditProfileMutation();
    const {
        register,
        formState: { errors },
        setValue,
        handleSubmit,
    } = useForm<IEditProfileFormInput>({
        resolver: yupResolver(editProfileSchema),
    });
    const { loading, error } = useProfileSettingsQuery(setValue);
    const onSubmit: SubmitHandler<IEditProfileFormInput> = (inputData) => {
        const { email, address } = inputData;
        const input = {
            id: localStorage.getItem("currentUser"),
            fields: {
                email,
                address: {
                    city: getCity(zip),
                    zipCode: Number(zip),
                    street: address.street,
                },
                neighborhood: Number(zip),
            },
        };
        editProfile({
            variables: { input },
            onCompleted: () => {
                toast.success("Profile updated successfully");
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

    const modalWidth = 500;

    if (loading) return null;
    if (error) return <p>{`Error :${error.message}`}</p>;

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: theme.flexGap.medium,
                alignItems: "center",
            }}
        >
            <div style={{ width: "100%" }}>
                <CardTitle children="Edit Profile" />
            </div>
            <InputField
                label="Edit email"
                id="email"
                type="text"
                register={register("email")}
                errorMessage={errors.email?.message}
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
                    width: "100%",
                }}
            >
                <Select
                    label="Zip code"
                    id="zip"
                    style={{ div: { flex: "2" } }}
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
                    placeholder={getCity(zip)}
                    value={getCity(zip)}
                    style={{ div: { flex: "1" } }}
                    readOnly={true}
                    register={register("address.city")}
                    errorMessage={errors.address?.city?.message}
                />
            </div>
            <div style={{ marginTop: "20px" }}></div>
            <Button
                color={theme.colors.cta}
                type="submit"
                disabled={submitLoading}
            >
                Save changes
            </Button>
        </form>
    );
};


import { CardTitle } from "src/components/CardTitle";
import { theme } from "src/theme";
import { Button } from "src/components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  INewChatFormInput,
  NewChatFormInput,
} from "./validationSchemas/NewChatForm";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { Select } from "src/components/Select";
import { getUsersByNeighborHood } from "src/parse/getUsersByNeighborHood";
import { useEffect, useState } from "react";
import { createPrivateChat } from "src/parse/createPrivateChat";

export const NewChatForm = () => {
  const [users, setUsers] = useState<Parse.Object[]>();
  const fetchUsers = async () => {
    const users = await getUsersByNeighborHood();
    setUsers(users as Parse.Object[]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<INewChatFormInput>({
    resolver: yupResolver(NewChatFormInput),
  });

  const onSubmit: SubmitHandler<INewChatFormInput> = (inputData) => {    
    const currentUser = localStorage.getItem("currentUserObjectId");

    if (!currentUser) {
      toast.error("You must be logged in to create a chat");
      return;
    }

    try {
      createPrivateChat([inputData.userId, currentUser]);
    } catch (error) {
      console.log(error);
      toast.error(error as string);
    }
    toast.success("Chat created");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

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
        <CardTitle>Create new private chat</CardTitle>
      </div>
      <Select
        label="Select a user from your neighborhood"
        id="userId"
        register={register("userId")}
        errorMessage={errors.userId?.message}
      >
        <option key={0} value="0">
          Select a neighbour
        </option>
        {users &&
          users.map(({ id, attributes }) => (
            <option key={id} value={id}>
              {attributes.username}
            </option>
          ))}
      </Select>
      <Button type="submit" color={theme.colors.cta} disabled={false}>
        Create Chat
      </Button>
    </form>
  );
};

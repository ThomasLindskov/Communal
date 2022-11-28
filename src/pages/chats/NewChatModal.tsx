import Modal from "react-modal";
import { Button } from "src/components/Button";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { InputField } from "src/components/InputField";
import { chatType } from "src/pages/chats/ChatsPage";
import { theme } from "src/theme";

export const NewChatModal = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggle}
      contentElement={(props, children) => (
        <div
          {...props}
          style={{
            position: "absolute",
            top: "25%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            margin: 0,
          }}
        >
          {children}
        </div>
      )}
    >
      <Card width="500px">
        <form
          //   onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: theme.flexGap.medium,
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <CardTitle>Create a new private chat</CardTitle>
          </div>
          <InputField
            label="You have to type DELETE to delete your account"
            id="deleteCheck"
            type="text"
            // register={register("deleteCheck")}
            // errorMessage={errors.deleteCheck?.message}
          />
          <Button type="submit" color={theme.colors.risk} disabled={false}>
            Delete Profile
          </Button>
        </form>
      </Card>
    </Modal>
  );
};

import Modal from "react-modal";
import { Card } from "src/components/Card";
import { NewChatForm } from "src/pages/chats/NewChat/NewChatForm";

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
      <Card width="300px">
        <NewChatForm />
      </Card>
    </Modal>
  );
};

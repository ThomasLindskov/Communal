import Modal from "react-modal";
import { Card } from "src/components/Card";
import { NewChatForm } from "src/pages/chats/NewChat/NewChatForm";
import { theme } from "src/theme";

const modalWidth = 300;

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
            left: `calc(50% - ${modalWidth / 2}px - ${theme.padding.large})`,
            right: `calc(50% - ${modalWidth / 2}px - ${theme.padding.large})`,
            width: "fit-content",
          }}
        >
          {children}
        </div>
      )}
    >
      <Card width={`${300}px`}>
        <NewChatForm />
      </Card>
    </Modal>
  );
};

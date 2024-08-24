import { useRef } from "react";
import { Button } from "src/components/Button";
import { CardTitle } from "src/components/CardTitle";
import { Chat } from "src/pages/chatPage/Chat";
import { addMessagesToChat } from "src/parse/addMessagesToChat";
import { theme } from "src/theme";
import styled from "styled-components";

export const ChatInfoCard = ({
  selectedChat,
  chatTitle,
}: {
  selectedChat: string;
  chatTitle: string;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSend = async (chatid: string) => {
    if (inputRef && inputRef.current) {
      const result = await addMessagesToChat(chatid, inputRef.current.value);
      if (result) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <>
      <CardTitle style={{ padding: 0 }}>{chatTitle}</CardTitle>
      <GrowContainer />
      <PaddingContainer>
        <OverflowContainer>
          <Chat id={selectedChat} />
        </OverflowContainer>
      </PaddingContainer>
      <InputContainer className="parent" onClick={handleClick}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend(selectedChat);
          }}
          style={{ width: "100%" }}
        >
          <ChatInput ref={inputRef} />
        </form>
        <Button
          color={theme.colors.cta}
          onClick={() => handleSend(selectedChat)}
        >
          Send
        </Button>
      </InputContainer>
    </>
  );
};

const PaddingContainer = styled.div`
  overflow: hidden;
  padding: ${theme.padding.large} 0;
  width: 100%;
`;

const GrowContainer = styled.div`
  border-top: 1px solid ${theme.colors.tertiary};
  flex-grow: 1;
  width: 100%;
`;

const OverflowContainer = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const ChatInput = styled.input`
  border: 0;
  color: ${({ theme }) => theme.colors.secondary};
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  resize: none;
  height: 100%;
  box-sizing: border-box;
  @font-face {
    font-family: SF Pro;
    src: url("/fonts/SF-Pro-Display-Regular.otf");
    format('truetype');
  }
  flex-grow: 1;
  outline: none;
  width: 100%;
`;

const InputContainer = styled.div`
  padding: ${({ theme }) => `${theme.padding.medium} ${theme.padding.large}`};
  line-height: 0;
  width: 100%;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  display: flex;
  align-content: center;
  gap: ${({ theme }) => theme.flexGap.medium};
  &:hover {
    cursor: text;
  }
`;

import React, { useRef } from "react";
import { Button } from "src/components/Button";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { InputField } from "src/components/InputField";
import { addMessagesToChat } from "src/parse/addMessagesToChat";
import { getChatsByUserId } from "src/parse/getChatsByUserId";
import { getMessagesInChat } from "src/parse/getMessagesInChat";
import { theme } from "src/theme";
import styled from "styled-components";
import { Chat } from "./Chat";
import Chats from "./Chats";


const ChatTypeWrapper = styled.div`
  gap: ${({ theme }) => theme.flexGap.small};
  display: flex;
  flex-direction: column;
  height: calc(50% - ${({ theme }) => theme.flexGap.small});
`;

const PaddingContainer = styled.div`
  overflow: hidden;
  border-top: 1px solid ${theme.colors.tertiary};
  padding: ${theme.padding.large} 0;
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
  font-family: "SF Pro";
  flex-grow: 1;
  outline: none;
`;

const InputContainer = styled.div`
  padding: ${({ theme }) => theme.padding.medium}
    ${({ theme }) => theme.padding.large};
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

export enum chatType {
  Private,
  Group,
}

export function ChatsPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    getMessagesInChat('B5LoAjTM1Y')
    if (inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <>
      <Card>
        <ChatTypeWrapper>
          <CardTitle style={{ padding: 0 }}>Common</CardTitle>
          <Chats chatType={chatType.Group} />
        </ChatTypeWrapper>
        <ChatTypeWrapper>
          <CardTitle style={{ padding: 0 }}>Private</CardTitle>
          <Chats chatType={chatType.Private} />
        </ChatTypeWrapper>
      </Card>
      <Card
        style={{
          gap: theme.flexGap.small,
          flexGrow: 1,
          alignItems: "flex-start",
          maxWidth: "750px",
        }}
      >
        <CardTitle style={{ padding: 0 }}>Eric Cartman</CardTitle>
        <PaddingContainer>
          <OverflowContainer>
            <Chat />
          </OverflowContainer>
        </PaddingContainer>
        <InputContainer className="parent" onClick={handleClick}>
          <ChatInput ref={inputRef} />
          <Button color={theme.colors.cta} >Send</Button>
        </InputContainer>
      </Card>
    </>
  );
}

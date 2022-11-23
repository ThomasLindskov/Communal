import React from "react";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { InputField } from "src/components/InputField";
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

const ChatInput = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.risk};
  color: ${({ theme }) => theme.colors.secondary};
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
  resize: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const InputContainer = styled.div`
  padding: ${({ theme }) => theme.padding.medium}
    ${({ theme }) => theme.padding.large};
  line-height: 0;
  width: 100%;
  min-height: 48px;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
`;

export enum chatType {
  Private,
  Group,
}

export function ChatsPage() {
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
        <InputContainer>
          <ChatInput></ChatInput>
        </InputContainer>
      </Card>
    </>
  );
}

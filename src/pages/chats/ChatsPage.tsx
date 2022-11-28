import React, { useState } from "react";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { ChatCard } from "src/pages/chats/ChatCard";
import { ChatsWrapper } from "src/pages/chats/ChatsWrapper";
import { theme } from "src/theme";
import styled from "styled-components";

export enum chatType {
  Private,
  Group,
}

export const ChatsPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);

  return (
    <>
      <Card>
        <ChatTypeWrapper>
          <CardTitle style={{ padding: 0 }}>Common</CardTitle>
          <ChatsWrapper
            type={chatType.Group}
            chatId={selectedChat}
            setSelectedChat={setSelectedChat}
          />
        </ChatTypeWrapper>
        <ChatTypeWrapper>
          <CardTitle style={{ padding: 0 }}>Private</CardTitle>
          <ChatsWrapper
            type={chatType.Private}
            chatId={selectedChat}
            setSelectedChat={setSelectedChat}
          />
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
        {selectedChat ? (
          <ChatCard selectedChat={selectedChat} />
        ) : (
          <CardTitle>Please select a chat on the left</CardTitle>
        )}
      </Card>
    </>
  );
};

const ChatTypeWrapper = styled.div`
  gap: ${({ theme }) => theme.flexGap.small};
  display: flex;
  flex-direction: column;
  height: calc(50% - ${({ theme }) => theme.flexGap.small});
  width: 100%;
`;

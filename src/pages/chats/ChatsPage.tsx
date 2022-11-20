import React from "react";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { theme } from "src/theme";
import styled from "styled-components";
import { Chat } from "./Chat";
import Chats from "./Chats";

const ChatTypeWrapper = styled.div`
  gap: ${({ theme }) => theme.flexGap.small};
  display: flex;
  flex-direction: column;
}
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
        <Chat />
      </Card>
    </>
  );
}

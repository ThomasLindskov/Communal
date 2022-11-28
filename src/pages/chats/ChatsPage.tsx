import React, { useEffect, useRef, useState } from "react";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { ChatCard } from "src/pages/chats/ChatCard";
import { ChatThumbnail } from "src/pages/chats/ChatThumbnail";
import { getChatsByUserId } from "src/parse/getChatsByUserId";
import { theme } from "src/theme";
import styled from "styled-components";

export enum chatType {
  Private,
  Group,
}

export const ChatsPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [privateChats, setPrivateChats] = useState<Parse.Object[]>([]);
  const chatsContainer = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const fetchPrivateChats = async () => {
      const currentUser = localStorage.getItem("currentUserObjectId");
      if (currentUser) {
        const data = await getChatsByUserId(currentUser, chatType.Private);
        setPrivateChats(data);
      }
    };
    fetchPrivateChats();
  }, [selectedChat]);

  return (
    <>
      <Card>
        <ChatTypeWrapper>
          <CardTitle style={{ padding: 0 }}>Common</CardTitle>
          {/* <ChatsWrapper
            type={chatType.Group}
            chatId={selectedChat}
            setSelectedChat={setSelectedChat}
          /> */}
        </ChatTypeWrapper>
        <ChatTypeWrapper>
          <CardTitle style={{ padding: 0 }}>Private</CardTitle>
          <OverflowContainer>
            <ChatsContainer ref={chatsContainer}>
              {privateChats &&
                privateChats.map((chat: Parse.Object) => (
                  <ChatThumbnail
                    id={chat.id}
                    selected={chat.id === selectedChat}
                    onClick={() => setSelectedChat(chat.id)}
                    key={chat.id}
                  />
                ))}
            </ChatsContainer>
          </OverflowContainer>
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

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.flexGap.medium};
`;

const OverflowContainer = styled.div`
  overflow: auto;
`;

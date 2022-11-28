import React, { useEffect, useRef, useState } from "react";
import { Button } from "src/components/Button";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { ChatCard } from "src/pages/chats/ChatCard";
import { ChatThumbnail } from "src/pages/chats/ChatThumbnail";
import { getPrivateChats } from "src/parse/getPrivateChatsByUserId";
import { theme } from "src/theme";
import styled from "styled-components";
import { useToggle } from "ahooks";
import { getGroupChats } from "src/parse/getGroupChats";
import { NewChatModal } from "src/pages/chats/NewChat/NewChatModal";

export enum chatType {
  Private,
  Group,
}

export const ChatsPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [privateChats, setPrivateChats] = useState<Parse.Object[]>([]);
  const [groupChats, setGroupChats] = useState<Parse.Object[]>([]);
  const privateChatsContainer = useRef<HTMLInputElement | null>(null);
  const groupChatsContainer = useRef<HTMLInputElement | null>(null);
  const [isNewPrivateChatOpen, { toggle: toggleIsNewPrivateChatOpen }] =
    useToggle();

  const fetchPrivateChats = async (
    setHandler: (data: Parse.Object[]) => void,
    userId: string
  ) => {
    const data = await getPrivateChats(userId);
    setHandler(data as Parse.Object[]);
  };

  const fetchGroupChats = async (
    setHandler: (data: Parse.Object[]) => void
  ) => {
    const data = await getGroupChats();
    if (data) {
      setHandler(data);
    }
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUserObjectId");
    if (currentUser) {
      fetchPrivateChats(setPrivateChats, currentUser);
      fetchGroupChats(setGroupChats);
    }
  }, []);

  return (
    <>
      <NewChatModal
        isOpen={isNewPrivateChatOpen}
        toggle={toggleIsNewPrivateChatOpen}
      />
      <Card>
        <ChatTypeWrapper>
          <CardTitle style={{ padding: 0 }}>Common</CardTitle>
          <OverflowContainer>
            <ChatsContainer ref={groupChatsContainer}>
              {groupChats &&
                groupChats.map((chat: Parse.Object) => (
                  <ChatThumbnail
                    id={chat.id}
                    avatarUrl={"/img/EricCartman.png"}
                    name={chat.get("name")}
                    selected={chat.id === selectedChat}
                    onClick={() => setSelectedChat(chat.id)}
                    key={chat.id}
                  />
                ))}
            </ChatsContainer>
          </OverflowContainer>
        </ChatTypeWrapper>
        <ChatTypeWrapper>
          <div style={{ display: "flex", gap: "44px" }}>
            <CardTitle style={{ padding: 0 }}>Private</CardTitle>
            <Button
              color={theme.colors.cta}
              onClick={toggleIsNewPrivateChatOpen}
            >
              New private chat
            </Button>
          </div>
          <OverflowContainer>
            <ChatsContainer ref={privateChatsContainer}>
              {privateChats &&
                privateChats.map((chat: Parse.Object) => (
                  <ChatThumbnail
                    name={chat.get("receiver").get("username")}
                    avatarUrl={"/img/EricCartman.png"}
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

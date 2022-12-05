import React, { useEffect, useRef, useState } from "react";
import { Button } from "src/components/Button";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { ChatCard } from "src/pages/chats/ChatCard";
import { ChatThumbnail } from "src/pages/chats/ChatThumbnail";
import { getPrivateChats } from "src/parse/getPrivateChats";
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
    setHandler: (data: Parse.Object[]) => void
  ) => {
    const data = await getPrivateChats();
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

  const handleChatTitle = () => {
    if (selectedChat) {
      const groupchat = groupChats.find((chat) => chat.id === selectedChat);
      const privatechat = privateChats.find((chat) => chat.id === selectedChat);
      if (groupchat) {
        return groupchat.get("name");
      } else if (privatechat) {
        const chatName = privatechat.get("name");

        return "Chat with " + chatName;
      }
    }
  };

  useEffect(() => {
    fetchPrivateChats(setPrivateChats);
    fetchGroupChats(setGroupChats);
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
                groupChats
                  .sort((a, b) => {
                    return b.get("name") - a.get("name");
                  })
                  .map((chat: Parse.Object) => (
                    <ChatThumbnail
                      id={chat.id}
                      group
                      name={chat.get("name")}
                      timeString={chat.get("lastMessage").get("timeAsString")}
                      lastMessage={chat.get("lastMessage").get("text")}
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
                privateChats
                  .sort((a, b) => {
                    console.log(a);
                    return (
                      b.get("lastMessage").get("createdAt") -
                      a.get("lastMessage").get("createdAt")
                    );
                  })
                  .map((chat: Parse.Object) => (
                    <ChatThumbnail
                      name={chat.get("receiver").get("username")}
                      avatarUrl={chat.get("receiver").get("image_url")}
                      id={chat.id}
                      timeString={chat.get("lastMessage").get("timeAsString")}
                      lastMessage={chat.get("lastMessage").get("text")}
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
          <ChatCard selectedChat={selectedChat} chatTitle={handleChatTitle()} />
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
  gap: ${({ theme }) => theme.flexGap.medium};
`;

const OverflowContainer = styled.div`
  overflow: auto;
`;

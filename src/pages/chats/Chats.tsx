import React, { useEffect, useRef } from "react";
import { ChatThumbnail } from "src/pages/chats/ChatThumbnail";
import { getChatsByUserId } from "src/parse/getChatsByUserId";
import { theme } from "src/theme";
import styled from "styled-components";
import { chatType } from "./ChatsPage";
const OverflowContainer = styled.div`
  overflow: auto;
`;

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.flexGap.medium};
`;

export default function Chats({
  chatType,
  setChat,
  selectedChat,
}: {
  chatType: chatType;
  setChat: Function;
  selectedChat: string;
}) {
  const chatsContainer = useRef<HTMLInputElement | null>(null);

  const [chats, setChats] = React.useState<Parse.Object[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const currentUser = localStorage.getItem("currentUserObjectId");
      if (currentUser) {
        const data = await getChatsByUserId(currentUser, chatType);
        setChats(data);
      }
    };
    fetchChats();
  }, [selectedChat, chatType]);

  return (
    <OverflowContainer>
      <ChatsContainer ref={chatsContainer}>
        {chats.map((chat: Parse.Object) => {
          return (
            <ChatThumbnail
              id={chat.id}
              selected={chat.id === selectedChat}
              onClick={() => setChat(chat.id)}
              key={chat.id}
            />
          );
        })}
      </ChatsContainer>
    </OverflowContainer>
  );
}

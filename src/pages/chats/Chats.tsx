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

  const [chats, setChats] = React.useState<any[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const currentUser = localStorage.getItem("currentUserObjectId");
      const data = await getChatsByUserId({ userid: currentUser });
      setChats(data);
    };
    fetchChats();
  }, [selectedChat]);

  return (
    <OverflowContainer>
      <ChatsContainer ref={chatsContainer}>
        {chats.map((chat: any) => {
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

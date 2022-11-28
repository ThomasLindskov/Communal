import React, { useEffect, useRef } from "react";
import { ChatThumbnail } from "src/pages/chats/ChatThumbnail";
import { getChatsByUserId } from "src/parse/getChatsByUserId";
import { theme } from "src/theme";
import styled from "styled-components";
import { chatType } from "./ChatsPage";

export const ChatsWrapper = ({
  type,
  setSelectedChat,
  chatId,
}: {
  type: chatType;
  setSelectedChat: (id: string) => void;
  chatId: string | null;
}) => {
  const chatsContainer = useRef<HTMLInputElement | null>(null);
  const [chats, setChats] = React.useState<Parse.Object[]>([]);
  const privateChats = ["fisk", "torsk"];

  useEffect(() => {
    const fetchChats = async () => {
      const currentUser = localStorage.getItem("currentUserObjectId");
      if (currentUser) {
        const data = await getChatsByUserId(currentUser, type);
        setChats(data);
      }
    };
    fetchChats();
  }, [chatId, type]);

  return (
    <OverflowContainer>
      <ChatsContainer ref={chatsContainer}>
        {chats.map((chat: Parse.Object) => {
          return (
            <ChatThumbnail
              id={chat.id}
              selected={chat.id === chatId}
              onClick={() => setSelectedChat(chat.id)}
              key={chat.id}
            />
          );
        })}
      </ChatsContainer>
    </OverflowContainer>
  );
};

const ChatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.flexGap.medium};
`;

const OverflowContainer = styled.div`
  overflow: auto;
`;

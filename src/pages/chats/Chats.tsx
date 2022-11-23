import React, { useRef } from "react";
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

export default function Chats({ chatType }: { chatType: chatType }) {
  // TODO: Fetch chats from backend
  let currentUser = localStorage.getItem('currentUserObjectId')
  let chats;
  if(currentUser){
     chats = getChatsByUserId(currentUser);
  }
  const chatsContainer = useRef<HTMLInputElement | null>(null);

  return (
    <OverflowContainer>
      <ChatsContainer ref={chatsContainer}>
        <ChatThumbnail id="1" selected={true} />
        <ChatThumbnail id="1" selected={false} />
        <ChatThumbnail id="1" selected={false} />
        <ChatThumbnail id="1" selected={false} />
      </ChatsContainer>
    </OverflowContainer>
  );
}

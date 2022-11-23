import React, { useEffect, useRef } from "react";
import { ChatThumbnail } from "src/pages/chats/ChatThumbnail";
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

  const chatsContainer = useRef<HTMLInputElement | null>(null);

  const [overFlowHeight, setOverFlowHeight] = React.useState<number | null>(
    null
  );

  return (
    <OverflowContainer
      style={{ maxHeight: overFlowHeight !== null ? overFlowHeight : "" }}
    >
      <ChatsContainer ref={chatsContainer}>
        <ChatThumbnail id="1" selected={true} />
        <ChatThumbnail id="1" selected={false} />
        <ChatThumbnail id="1" selected={false} />
        <ChatThumbnail id="1" selected={false} />
      </ChatsContainer>
    </OverflowContainer>
  );
}

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
  overflow-y: scroll;
`;

export default function Chats({ chatType }: { chatType: chatType }) {
  // TODO: Fetch chats from backend

  const chatsContainer = useRef<HTMLInputElement | null>(null);

  const [overFlowHeight, setOverFlowHeight] = React.useState<number | null>(
    null
  );

  useEffect(() => {
    if (chatsContainer && chatsContainer.current) {
      const numOfChildren = chatsContainer.current.children.length;

      if (numOfChildren > 3) {
        const height: number =
          chatsContainer.current.getBoundingClientRect().height;
        const gapHeight: number = theme.flexGap.medium.replace(
          "px",
          ""
        ) as unknown as number;

        const totalGapHeight: number = (numOfChildren - 1) * gapHeight;

        const thumbnailHeight: number =
          (height - totalGapHeight) / numOfChildren;

        setOverFlowHeight(thumbnailHeight * 3.5 + gapHeight * 3);
      }
    }
  }, [chatsContainer]);

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

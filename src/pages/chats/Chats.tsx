import React, { useRef } from "react";
import { ChatThumbnail } from "src/pages/chats/ChatThumbnail";
import { getChatsByUserId } from "src/parse/getChatsByUserId";
import { theme } from "src/theme";
import styled from "styled-components";
import { chatType } from "./ChatsPage";
import { useAsync, IfPending, IfFulfilled, IfRejected } from "react-async";

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
}: {
  chatType: chatType;
  setChat: Function;
}) {
  // TODO: Fetch chats from backend
  let currentUser = localStorage.getItem("currentUserObjectId");
  const state = useAsync({ promiseFn: getChatsByUserId, userid: currentUser });
  const chatsContainer = useRef<HTMLInputElement | null>(null);

  const handleChange = (chatid: string) => {
    setChat(chatid);
  };

  return (
    <>
      <IfPending state={state}>Loading...</IfPending>
      <IfRejected state={state}>
        {(error) => `Something went wrong: ${error.message}`}
      </IfRejected>
      <IfFulfilled state={state}>
        {(data) => (
          <OverflowContainer>
            <ChatsContainer ref={chatsContainer}>
              {data.map((chat: any) => {
                return (
                  <div onClick={() => handleChange(chat.id)} key={chat.id}>
                    <ChatThumbnail
                      id={chat.id}
                      selected={false}
                    />
                  </div>
                );
              })}
            </ChatsContainer>
          </OverflowContainer>
        )}
      </IfFulfilled>
    </>
  );
}

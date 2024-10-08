import React, { useEffect, useRef } from "react";
import { getMessagesInChat } from "src/parse/queryToGetMessagesInChat";
import { theme } from "src/theme";
import styled from "styled-components";
import { useParseQuery } from "@parse/react";
import { Message } from "src/pages/chatPage/Message";

export enum messageType {
  Sent,
  Received,
}

export const Chat = ({ id }: { id: string }) => {
  const parseQuery = getMessagesInChat(id);
  const currentUser = localStorage.getItem("currentUserObjectId");
  const { isLoading, results } = useParseQuery(parseQuery);

  const isSentByCurrentUser = (sender: any) => {
    if (sender.id === currentUser || sender.objectId === currentUser) {
      return messageType.Sent;
    } else {
      return messageType.Received;
    }
  };

  const bottomRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [results]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      {results && (
        <ChatContainer>
          {results
            .sort((a: Parse.Object, b: Parse.Object) => {
              return a.get("createdAt") - b.get("createdAt");
            })
            .map((message: Parse.Object) => {
              return (
                <Row
                  key={message.id}
                  type={isSentByCurrentUser(message.get("sender"))}
                >
                  <Message
                    text={message.get("text")}
                    type={isSentByCurrentUser(message.get("sender"))}
                    createdAt={message.get("createdAt")}
                    sender={message.get("sender")}
                  />
                </Row>
              );
            })}
          <div id="bottom-ref" ref={bottomRef} />
        </ChatContainer>
      )}
    </>
  );
};

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.flexGap.medium};
  width: 100%;
`;

const Row = styled.div<{ type: messageType }>`
  display: flex;
  flex-grow: 1;
  ${(props) => props.type === messageType.Sent && "align-self: flex-end;"}
`;

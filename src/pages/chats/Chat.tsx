import React, { useEffect, useRef } from "react";
import { getMessagesInChat } from "src/parse/queryToGetMessagesInChat";
import { theme } from "src/theme";
import styled from "styled-components";
import Message from "./Message";
import { useParseQuery } from "@parse/react";

export enum messageType {
  Sent,
  Received,
}

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

export function Chat(props: any) {
  const parseQuery = getMessagesInChat(props.id);
  const currentUser = localStorage.getItem("currentUserObjectId");
  //make sure your class is enabled for Real Time Notifications (Live Query) checking the menu -> App Settings -> Server Settings -> Server URL and Live Query
  const { isLive, isLoading, isSyncing, results, count, error, reload } =
    useParseQuery(parseQuery);

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

  if (isLoading || isSyncing) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {results && (
        <ChatContainer>
          {results
            .sort((a: any, b: any) => {
              return a.createdAt - b.createdAt;
            })
            .map((message: any) => {
              return (
                <Row
                  key={message.id}
                  type={isSentByCurrentUser(message.attributes.sender)}
                >
                  <Message
                    text={message.attributes.text}
                    type={isSentByCurrentUser(message.attributes.sender)}
                  />
                </Row>
              );
            })}
          <div id="bottom-ref" ref={bottomRef} />
        </ChatContainer>
      )}
    </>
  );
}

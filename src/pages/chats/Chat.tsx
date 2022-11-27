import React from "react";
import { useAsync, IfPending, IfFulfilled, IfRejected } from "react-async";
import { getMessagesInChat } from "src/parse/queryToGetMessagesInChat";
import { theme } from "src/theme";
import styled from "styled-components";
import Message from "./Message";
import { useParseQuery } from  "@parse/react";

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

    //make sure your class is enabled for Real Time Notifications (Live Query) checking the menu -> App Settings -> Server Settings -> Server URL and Live Query
  const {
    isLive,
    isLoading,
    isSyncing,
    results,
    count,
    error,
    reload
  } = useParseQuery(parseQuery);

  

  if (isLoading || isSyncing) {
    return <div>Loading...</div>
  }
   
  return (
    <>
        {results && (
          <ChatContainer>
            {results.map((message: any) => {
              return (
                <Row key={message.id} type={messageType.Received}>
                  <Message type={messageType.Received}/>
                </Row>
              );
            })}
          </ChatContainer>
        )}
    </>
  );
}

import React from "react";
import { useAsync, IfPending, IfFulfilled, IfRejected } from "react-async";
import { getMessagesInChat } from "src/parse/getMessagesInChat";
import { theme } from "src/theme";
import styled from "styled-components";
import Message from "./Message";

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

export function Chat(props: { id: string }) {
  const state = useAsync({
    promiseFn: getMessagesInChat,
    deferFn: getMessagesInChat,
    chatid: props.id,
  });
  return (
    <>
      <IfPending state={state}>Loading...</IfPending>
      <IfRejected state={state}>
        {(error) => `Something went wrong: ${error.message}`}
      </IfRejected>
      <IfFulfilled state={state}>
        {(data) => (
          <ChatContainer>
            {data.map((message: any) => {
              return (
                <Row key={message.id} type={messageType.Received}>
                  <Message type={messageType.Received} />
                </Row>
              );
            })}
          </ChatContainer>
        )}
      </IfFulfilled>
    </>
  );
}

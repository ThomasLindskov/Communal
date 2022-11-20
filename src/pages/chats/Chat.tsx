import React from "react";
import { theme } from "src/theme";
import styled from "styled-components";
import Message from "./Message";

export enum messageType {
  Sent,
  Received,
}

const ChatContainer = styled.div`
  border-top: 1px solid ${theme.colors.tertiary};
  padding-top: 20px;
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

export function Chat() {
  return (
    <ChatContainer>
      <Row type={messageType.Sent}>
        <Message type={messageType.Sent} />
      </Row>
      <Row type={messageType.Received}>
        <Message type={messageType.Received} />
      </Row>
      <Row type={messageType.Sent}>
        <Message type={messageType.Sent} />
      </Row>
      <Row type={messageType.Received}>
        <Message type={messageType.Received} />
      </Row>
      <Row type={messageType.Sent}>
        <Message type={messageType.Sent} />
      </Row>
      <Row type={messageType.Received}>
        <Message type={messageType.Received} />
      </Row>
      <Row type={messageType.Sent}>
        <Message type={messageType.Sent} />
      </Row>
      <Row type={messageType.Received}>
        <Message type={messageType.Received} />
      </Row>
    </ChatContainer>
  );
}

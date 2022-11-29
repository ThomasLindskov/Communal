import React from "react";
import Avatar from "src/components/Avatar";
import Sharktooth from "src/components/Sharktooth";
import { theme } from "src/theme";
import styled from "styled-components";
import { messageType } from "./Chat";
import moment from "moment";
import "./style/css/tooltip.css";

const getTooltipClassNames = (type: messageType) => {
  if(type === messageType.Sent){
    return 'tooltip left'
  }
  if(type === messageType.Received){
    return 'tooltip';
  }

}


export const Message = ({
  type,
  text,
  avatarUrl, 
  createdAt,
  senderName
}: {
  type: messageType;
  text: string;
  avatarUrl: string;
  createdAt: Date;
  senderName: string; 
}) => {
  return (
    <Wrapper type={type}>
      <Avatar
        imageUrl={avatarUrl}
        altText="user-avatar"
        size={theme.avatarSize.medium}
        name={senderName}
        tooltipClasses = {getTooltipClassNames(type)}
      />
      
      <MessageContainer type={type} className={`${getTooltipClassNames(type)} message`} data-text={moment(createdAt).fromNow()}>
        <SharktoothContainer type={type}>
          <Sharktooth
            color={
              type === messageType.Sent
                ? theme.colors.primary
                : theme.colors.white
            }
            borderColor={theme.colors.tertiary}
          />
        </SharktoothContainer>
        {text}
      </MessageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ type: messageType }>`
  display: flex;
  gap: ${({ theme }) => theme.flexGap.large};
  ${(props) =>
    props.type === messageType.Sent && "flex-direction: row-reverse;"}
`;

const MessageContainer = styled.div<{ type: messageType }>`
  border-radius: ${theme.utils.borderRadius};
  border: 1px solid ${theme.colors.tertiary};
  background-color: ${(props) =>
    props.type === messageType.Sent
      ? theme.colors.primary
      : theme.colors.white};
  padding: ${theme.padding.large};
  color: ${(props) =>
    props.type === messageType.Sent
      ? theme.colors.white
      : theme.colors.tertiary};
  max-width: 300px;
  font-size: ${theme.fontSize.medium};
  position: relative;
`;

const SharktoothContainer = styled.div<{ type: messageType }>`
  position: absolute;
  ${(props) => (props.type === messageType.Sent ? "right" : "left")}: -13px;
  ${(props) => props.type === messageType.Sent && "transform: rotate(180deg);"}
`;

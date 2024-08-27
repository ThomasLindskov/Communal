// src/components/ChatList.tsx
import React from 'react';
import styled from 'styled-components';
import { ChatThumbnail } from 'src/pages/chatPage/ChatThumbnail';

// TypeScript interface for component props
interface ChatListProps {
  chats: Parse.Object[];
  selectedChat: string | null;
  setSelectedChat: React.Dispatch<React.SetStateAction<string | null>>;
  group?: boolean;
}

// ChatList component definition
export const ChatList: React.FC<ChatListProps> = ({ chats, selectedChat, setSelectedChat, group = false }) => (
  <ChatTypeWrapper>
    <OverflowContainer>
      <ChatsContainer group={group}>
        {chats
          .sort((a, b) => b.get('lastMessage').get('createdAt') - a.get('lastMessage').get('createdAt'))
          .map((chat) => (
            <ChatThumbnail
              key={chat.id}
              id={chat.id}
              group={group}
              name={group ? chat.get('name') : chat.get('receiver').get('username')}
              avatarUrl={group ? undefined : chat.get('receiver').get('image_url')}
              timeString={chat.get('lastMessage').get('timeAsString')}
              lastMessage={chat.get('lastMessage').get('text')}
              selected={chat.id === selectedChat}
              onClick={() => setSelectedChat(chat.id)}
            />
          ))}
      </ChatsContainer>
    </OverflowContainer>
  </ChatTypeWrapper>
);

// Styled components
const ChatTypeWrapper = styled.div`
  gap: ${({ theme }) => theme.flexGap.small};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ChatsContainer = styled.div<{ group?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.flexGap.medium};
`;

const OverflowContainer = styled.div`
  padding: 10px;
  overflow: auto;
`;

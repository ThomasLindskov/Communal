// src/pages/chatPage/ChatsPage.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'src/components/Button';
import { Card } from 'src/components/Card';
import { CardTitle } from 'src/components/CardTitle';
import { ChatInfoCard } from 'src/pages/chatPage/ChatInfoCard';
import { NewChatModal } from 'src/pages/chatPage/NewChatModal/NewChatModal';
import { getPrivateChats } from 'src/parse/getPrivateChats';
import { getGroupChats } from 'src/parse/getGroupChats';
import { theme } from 'src/theme';
import { useToggle } from 'ahooks';
import { ChatList } from 'src/pages/chatPage/ChatList'; 

export enum ChatType {
  Private,
  Group,
}

export const ChatsPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [privateChats, setPrivateChats] = useState<Parse.Object[]>([]);
  const [groupChats, setGroupChats] = useState<Parse.Object[]>([]);
  const [activeTab, setActiveTab] = useState<ChatType>(ChatType.Group);
  const [isNewPrivateChatOpen, { toggle: toggleIsNewPrivateChatOpen }] = useToggle();

  useEffect(() => {
    const fetchChats = async () => {
      const [privateData, groupData] = await Promise.all([
        getPrivateChats(),
        getGroupChats(),
      ]);
      setPrivateChats(privateData as Parse.Object[]);
      setGroupChats(groupData as Parse.Object[]);
    };

    fetchChats();
  }, []);

  const handleChatTitle = () => {
    const chat = groupChats.find((chat) => chat.id === selectedChat) || privateChats.find((chat) => chat.id === selectedChat);
    return chat ? chat.get('name') || `Chat with ${chat.get('receiver').get('username')}` : null;
  };

  return (
    <>
      <NewChatModal isOpen={isNewPrivateChatOpen} toggle={toggleIsNewPrivateChatOpen} />
      <Card style={{ flex: 1, padding: 0 }} >
        <TabContainer>
          <TabButton active={activeTab === ChatType.Group} onClick={() => setActiveTab(ChatType.Group)}>
            <FontAwesomeIcon icon={faUsers} /> Common
          </TabButton>
          <TabButton active={activeTab === ChatType.Private} onClick={() => setActiveTab(ChatType.Private)}>
            <FontAwesomeIcon icon={faUser} /> Private
          </TabButton>
        </TabContainer>

        {activeTab === ChatType.Group ? (
          <ChatList chats={groupChats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} group />
        ) : (
          <>
            <ButtonContainer>
              <Button color={theme.colors.cta} onClick={toggleIsNewPrivateChatOpen}>
                New private chat
              </Button>
            </ButtonContainer>
            <ChatList chats={privateChats} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
          </>
        )}
      </Card>
      <Card style={{ gap: theme.flexGap.small, flex: 2, alignItems: 'flex-start' }}>
        {selectedChat ? (
          <ChatInfoCard selectedChat={selectedChat} chatTitle={handleChatTitle()} />
        ) : (
          <CardTitle>Please select a chat on the left</CardTitle>
        )}
      </Card>
    </>
  );
};

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
  width: 100%;
`;

const TabButton = styled.div<{ active: boolean }>`
  flex: 1;
  cursor: pointer;
  padding: 10px;
  background-color: ${({ active }) => (active ? theme.colors.cta : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 44px;
  justify-content: center;
`;

// src/pages/chatPage/ChatsPage.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'src/components/Button';
import { Card } from 'src/components/Card';
import { CardTitle } from 'src/components/CardTitle';
import { ChatInfoCard } from 'src/pages/chatPage/ChatInfoCard';
import { NewChatModal } from 'src/pages/chatPage/NewChatModal';
import { getPrivateChats } from 'src/parse/getPrivateChats';
import { getGroupChats } from 'src/parse/getGroupChats';
import { theme } from 'src/theme';
import { useToggle } from 'ahooks';
import { ChatList } from 'src/pages/chatPage/ChatList';
import { useNavigate, useLocation } from 'react-router-dom';

export enum ChatType {
  Private,
  Group,
}

export const ChatsPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [privateChats, setPrivateChats] = useState<Parse.Object[]>([]);
  const [groupChats, setGroupChats] = useState<Parse.Object[]>([]);
  const [viewMode, setViewMode] = useState<React.SetStateAction<string | null>>('select-chat');
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Track if it's a small screen
 // Track the view mode ('select-chat' or 'chat')
  const [isNewPrivateChatOpen, { toggle: toggleIsNewPrivateChatOpen }] = useToggle();
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<ChatType>(() => {
    const params = new URLSearchParams(location.search);
    return params.get('tab') === 'group' ? ChatType.Group : ChatType.Private;
  });

  // Function to handle chat selection
  const handleChatSelect = (chat: React.SetStateAction<string | null>) => {
    setSelectedChat(chat);
    setViewMode('chat'); // Switch to chat view
  };

  // Function to handle going back to chat list
  const handleBackToChatList = () => {
    setViewMode('select-chat'); // Switch back to select-chat view
  };

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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabParam = params.get('tab');
    if (tabParam === 'group' && activeTab !== ChatType.Group) {
      setActiveTab(ChatType.Group);
    } else if (tabParam !== 'group' && activeTab !== ChatType.Private) {
      setActiveTab(ChatType.Private);
    }
  }, [location.search]);


  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed (768px is common for small screens)
    };

    // Set initial screen size
    handleResize();

    // Listen for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const setActiveTabAndUpdateURL = (tab: ChatType) => {
    setActiveTab(tab);
    navigate(`?tab=${tab === ChatType.Group ? 'group' : 'private'}`, { replace: true });
  };

  const handleChatTitle = () => {
    const chat = groupChats.find((chat) => chat.id === selectedChat) || privateChats.find((chat) => chat.id === selectedChat);
    return chat ? chat.get('name') || `Chat with ${chat.get('receiver').get('username')}` : null;
  };

  return (
    <>
      <NewChatModal isOpen={isNewPrivateChatOpen} toggle={toggleIsNewPrivateChatOpen} />
      
      {isSmallScreen ? (
        viewMode === 'select-chat' ? (
          <Card style={{ flex: 1, padding: 0 }}>
            <TabContainer>
              <TabButton active={activeTab === ChatType.Private} onClick={() => setActiveTabAndUpdateURL(ChatType.Private)}>
                <FontAwesomeIcon icon={faUser} /> Private
              </TabButton>
              <TabButton active={activeTab === ChatType.Group} onClick={() => setActiveTabAndUpdateURL(ChatType.Group)}>
                <FontAwesomeIcon icon={faUsers} /> Common
              </TabButton>
            </TabContainer>
  
            {activeTab === ChatType.Group ? (
              <ChatList chats={groupChats} selectedChat={selectedChat} setSelectedChat={handleChatSelect} group />
            ) : (
              <>
                <ChatList chats={privateChats} selectedChat={selectedChat} setSelectedChat={handleChatSelect} />
                <ButtonContainer>
                  <Button color={theme.colors.cta} onClick={toggleIsNewPrivateChatOpen}>
                    New private chat
                  </Button>
                </ButtonContainer>
              </>
            )}
          </Card>
        ) : (
          <Card style={{ flex: 2, padding: '1rem' }}>
            <Button onClick={handleBackToChatList} style={{ marginBottom: '1rem' }} color={theme.colors.cta}>
              ← Back to chat list
            </Button>
            {selectedChat ? (
              <ChatInfoCard selectedChat={selectedChat} chatTitle={handleChatTitle()} />
            ) : (
              <CardTitle>Please select a chat</CardTitle>
            )}
          </Card>
        )
      ) : (
        <>
          {/* For large screens, show both the chat list and the chat content side by side */}
          <Card style={{ flex: 1, padding: 0 }}>
            <TabContainer>
              <TabButton active={activeTab === ChatType.Private} onClick={() => setActiveTabAndUpdateURL(ChatType.Private)}>
                <FontAwesomeIcon icon={faUser} /> Private
              </TabButton>
              <TabButton active={activeTab === ChatType.Group} onClick={() => setActiveTabAndUpdateURL(ChatType.Group)}>
                <FontAwesomeIcon icon={faUsers} /> Common
              </TabButton>
            </TabContainer>
  
            {activeTab === ChatType.Group ? (
              <ChatList chats={groupChats} selectedChat={selectedChat} setSelectedChat={handleChatSelect} group />
            ) : (
              <>
                <ChatList chats={privateChats} selectedChat={selectedChat} setSelectedChat={handleChatSelect} />
                <ButtonContainer>
                  <Button color={theme.colors.cta} onClick={toggleIsNewPrivateChatOpen}>
                    New private chat
                  </Button>
                </ButtonContainer>
              </>
            )}
          </Card>
          <Card style={{ flex: 2, padding: '1rem' }}>
            {selectedChat ? (
              <ChatInfoCard selectedChat={selectedChat} chatTitle={handleChatTitle()} />
            ) : (
              <CardTitle>Please select a chat on the left</CardTitle>
            )}
          </Card>
        </>
      )}
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

import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'src/components/Button';
import { Card } from 'src/components/Card';
import { CardTitle } from 'src/components/CardTitle';
import { ChatInfoCard } from 'src/pages/chatPage/ChatInfoCard';
import { ChatThumbnail } from 'src/pages/chatPage/ChatThumbnail';
import { getPrivateChats } from 'src/parse/getPrivateChats';
import { theme } from 'src/theme';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUser } from '@fortawesome/free-solid-svg-icons';
import { useToggle } from 'ahooks';
import { getGroupChats } from 'src/parse/getGroupChats';
import { NewChatModal } from 'src/pages/chatPage/NewChatModal/NewChatModal';

export enum chatType {
  Private,
  Group,
}

export const ChatsPage = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [privateChats, setPrivateChats] = useState<Parse.Object[]>([]);
  const [groupChats, setGroupChats] = useState<Parse.Object[]>([]);
  const [activeTab, setActiveTab] = useState('common');
  const [isNewPrivateChatOpen, { toggle: toggleIsNewPrivateChatOpen }] =
    useToggle();

  const fetchPrivateChats = async (
    setHandler: (data: Parse.Object[]) => void
  ) => {
    const data = await getPrivateChats();
    setHandler(data as Parse.Object[]);
  };

  const fetchGroupChats = async (
    setHandler: (data: Parse.Object[]) => void
  ) => {
    const data = await getGroupChats();
    if (data) {
      setHandler(data);
    }
  };

  const handleChatTitle = () => {
    if (selectedChat) {
      const groupchat = groupChats.find((chat) => chat.id === selectedChat);
      const privatechat = privateChats.find((chat) => chat.id === selectedChat);
      if (groupchat) {
        return groupchat.get('name');
      } else if (privatechat) {
        const chatName = privatechat.get('name');

        return 'Chat with ' + chatName;
      }
    }
  };

  useEffect(() => {
    fetchPrivateChats(setPrivateChats);
    fetchGroupChats(setGroupChats);
  }, []);

  return (
    <>
      <NewChatModal
        isOpen={isNewPrivateChatOpen}
        toggle={toggleIsNewPrivateChatOpen}
      />
      <Card style={{ flex: 0.2 }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '16px', width: '100%'}}>
          <div
            onClick={() => setActiveTab('common')}
            style={{
              flex: '1',
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: activeTab === 'common' ? theme.colors.cta : 'transparent',
              color: activeTab === 'common' ? '#fff' : '#000'
            }}
          >
            <FontAwesomeIcon icon={faUsers} /> Common
          </div>
          <div
            onClick={() => setActiveTab('private')}
            style={{
              flex: '1',
              cursor: 'pointer',
              padding: '10px',
              backgroundColor: activeTab === 'private' ? theme.colors.cta : 'transparent',
              color: activeTab === 'private' ? '#fff' : '#000'
            }}
          >
            <FontAwesomeIcon icon={faUser} /> Private
          </div>
        </div>

        {activeTab === 'common' && (
          <ChatTypeWrapper>
            <OverflowContainer>
              <ChatsContainer>
                {groupChats &&
                  groupChats
                    .sort((a, b) => b.get('name') - a.get('name'))
                    .map((chat) => (
                      <ChatThumbnail
                        id={chat.id}
                        group
                        name={chat.get('name')}
                        timeString={chat.get('lastMessage').get('timeAsString')}
                        lastMessage={chat.get('lastMessage').get('text')}
                        selected={chat.id === selectedChat}
                        onClick={() => setSelectedChat(chat.id)}
                        key={chat.id}
                      />
                    ))}
              </ChatsContainer>
            </OverflowContainer>
          </ChatTypeWrapper>
        )}

        {activeTab === 'private' && (
          <ChatTypeWrapper>
            <div style={{ display: 'flex', gap: '44px', justifyContent: 'center' }}>
              <Button color={theme.colors.cta} onClick={toggleIsNewPrivateChatOpen}>
                New private chat
              </Button>
            </div>
            <OverflowContainer>
              <ChatsContainer>
                {privateChats &&
                  privateChats
                    .sort((a, b) => b.get('lastMessage').get('createdAt') - a.get('lastMessage').get('createdAt'))
                    .map((chat) => (
                      <ChatThumbnail
                        name={chat.get('receiver').get('username')}
                        avatarUrl={chat.get('receiver').get('image_url')}
                        id={chat.id}
                        timeString={chat.get('lastMessage').get('timeAsString')}
                        lastMessage={chat.get('lastMessage').get('text')}
                        selected={chat.id === selectedChat}
                        onClick={() => setSelectedChat(chat.id)}
                        key={chat.id}
                      />
                    ))}
              </ChatsContainer>
            </OverflowContainer>
          </ChatTypeWrapper>
        )}
      </Card>
      <Card
        style={{
          gap: theme.flexGap.small,
          flexGrow: 1,
          alignItems: 'flex-start',

        }}
      >
        {selectedChat ? (
          <ChatInfoCard selectedChat={selectedChat} chatTitle={handleChatTitle()} />
        ) : (
          <CardTitle>Please select a chat on the left</CardTitle>
        )}
      </Card>
    </>
  );
};

const ChatTypeWrapper = styled.div`
  gap: ${({ theme }) => theme.flexGap.small};
  display: flex;
  flex-direction: column;
  height: calc(50% - ${({ theme }) => theme.flexGap.small});
  width: 100%;
`;


const ChatsContainer = styled.div<{ group?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.flexGap.medium};
  min-height: ${({ theme }) => (props) => props.group ? theme.utils.minHeight : '250px'};
`;

const OverflowContainer = styled.div`
  overflow: auto;
`;

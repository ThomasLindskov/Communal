import React from 'react'
import styled from "styled-components"

const Container = styled.div`
background-color: ${({ theme }) => theme.colors.primary};
display: grid;
height: 500px;
width: 500px;
grid-template-areas:
". . x x . . . . . ."
". . x x . . . . . ."
". . . . a a a . . ."
". . . . a a a . . ."
"y y . . . . . . z z"
"y y . . . . . . z z"
". . . b b . c c . ."
". . . b b . c c . ."
". . q q . . . w w ."
". . q q . . . w w .";
`;
const Icon = styled.img`
width: 80%;
height: 80%;
`;

export const UserGroup = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '50px' }}>
        <Container>
            <Icon style={{ gridArea: 'x', transform: 'rotate(180deg)' }} src="/icons/users/Group 1.svg" alt="Adult Male Icon" />
            <Icon style={{ gridArea: 'y', transform: 'rotate(90deg)' }} src="/icons/users/Group 9.svg" alt="Young Male Icon" />
            <Icon style={{ gridArea: 'z', transform: 'rotate(-90deg)' }} src="/icons/users/Group 7.svg" alt="Young Female Icon" />
            <Icon style={{ gridArea: 'q' }} src="/icons/users/Group 10.svg" alt="Adult Female Icon" />
            <Icon style={{ gridArea: 'w' }} src="/icons/users/Group 12.svg" alt="Adult Female Icon" />
            <Icon style={{ gridArea: 'a' }} src="/icons/bubbles/SpeechBubble1.svg" alt="Speech Bubble1" />
            <Icon style={{ gridArea: 'b' }} src="/icons/bubbles/SpeechBubble2.svg" alt="Speech Bubble2" />
            <Icon style={{ gridArea: 'c' }} src="/icons/bubbles/SpeechBubble3.svg" alt="Speech Bubble3" />
        </Container>
    </div>


)
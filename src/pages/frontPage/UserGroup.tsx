import React from 'react'
import { start } from 'repl';
import styled from "styled-components"
import Icon from '../../components/Icon';
import { UserIconContainer } from './UserIconContainer';

const Container = styled.div`
background-color: ${({ theme }) => theme.colors.primary};
display: grid;
height: 100vh;
width: 100%;
grid-auto-rows: 1fr;
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





export const UserGroup = () => (
        <Container>
            <UserIconContainer gridArea='x'  src={"/icons/users/Group 1.svg"} style={{ justifyContent: "flex-end", alignItems: 'flex-start' }} iconStyle ={{transform: "rotate(180deg)"}}/>
            <UserIconContainer gridArea='y'  src={"/icons/users/Group 9.svg"} style={{ justifyContent: "flex-start", paddingLeft: 14 }} iconStyle ={{transform: "rotate(90deg)"}}/>
            <UserIconContainer gridArea='z'  src={"/icons/users/Group 7.svg"} style={{ justifyContent: "flex-end", paddingRight: 16 }} iconStyle ={{transform: "rotate(-90deg)"}}/>
            <UserIconContainer gridArea='q'  src={"/icons/users/Group 10.svg"} style={{ justifyContent: "space-around", alignItems: 'flex-end' }}/>
            <UserIconContainer gridArea='w'  src={"/icons/users/Group 12.svg"} style={{ alignItems: 'flex-end' }}/>
            <UserIconContainer gridArea='a'  src={"/icons/bubbles/SpeechBubble1.svg"} style={{ justifyContent: 'flex-start' , alignItems: 'flex-start' }}/>
            <UserIconContainer gridArea='b'  src={"/icons/bubbles/SpeechBubble2.svg"} style={{ alignItems: 'flex-end' }}/>
            <UserIconContainer gridArea='c'  src={"/icons/bubbles/SpeechBubble3.svg"} style={{ justifyContent: 'center' ,alignItems: 'flex-end' }}/>
        </Container>
)
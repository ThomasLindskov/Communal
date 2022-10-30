import React from 'react'
import { start } from 'repl';
import styled from "styled-components"
import Icon from '../../components/Icon';

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

interface IIconContainerProps {
    gridArea: string
    transform?: number
    padding?: number
    justify?: string
}

const IconContainer = styled.div<IIconContainerProps>`
    grid-area: ${(props) => props.gridArea};
    display: flex;
    overflow: hidden;
    ${({transform}) => transform && `img {transform: rotate(${transform}deg)}`}
    ${({padding}) => padding && `img {padding-left: ${padding}px}`}
    ${({justify}) => justify && `justify-content: ${justify}`}
`


export const UserGroup = () => (
        <Container>
            <IconContainer gridArea='x' transform={180} justify="flex-end">
                <Icon  src={"/icons/users/Group 1.svg"} />
            </IconContainer>
            <IconContainer gridArea='y' transform={90}>
                <Icon src={"/icons/users/Group 9.svg"}/>
            </IconContainer>
            <IconContainer gridArea='z' transform= {-90} justify="flex-end" padding={40} >
                <Icon src={"/icons/users/Group 7.svg"}  />
            </IconContainer>
            <IconContainer gridArea= 'q' justify='space-around' >
                <Icon src={"/icons/users/Group 10.svg"} />
            </IconContainer>
            <IconContainer  gridArea= 'w' >
            <Icon src={"/icons/users/Group 12.svg" }/>
            </IconContainer>
            <IconContainer  gridArea= 'a' >
            <Icon  src={"/icons/bubbles/SpeechBubble1.svg" } />
            </IconContainer>
            <IconContainer  gridArea= 'b' >
            <Icon  src={"/icons/bubbles/SpeechBubble2.svg"} />
            </IconContainer>
            <IconContainer gridArea= 'c' justify='center'>
                <Icon src={"/icons/bubbles/SpeechBubble3.svg"} />
            </IconContainer>
        </Container>
)
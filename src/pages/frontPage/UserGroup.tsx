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
    imgpaddingleft?: number
    divpaddingleft?: number
    divpaddingright?: number
    justify?: string
    align?: string
}

const IconContainer = styled.div<IIconContainerProps>`
    grid-area: ${(props) => props.gridArea};
    display: flex;
    overflow: hidden;
    ${({transform}) => transform && `img {transform: rotate(${transform}deg)}`}
    ${({imgpaddingleft}) => imgpaddingleft && `img {padding-left: ${imgpaddingleft}px}`}
    ${({divpaddingleft}) => divpaddingleft && `padding-left: ${divpaddingleft}px;`}
    ${({divpaddingright}) => divpaddingright && `padding-right: ${divpaddingright}px;}`}
    ${({justify}) => justify && `justify-content: ${justify};`}
    ${({align}) => align && `align-items: ${align};`}
    `


export const UserGroup = () => (
        <Container>
            <IconContainer gridArea='x' transform={180} justify="flex-end" align="flex-start">
                <Icon  src={"/icons/users/Group 1.svg"} />
            </IconContainer>
            <IconContainer gridArea='y' transform={90}  divpaddingright={40} divpaddingleft={10}>
                <Icon src={"/icons/users/Group 9.svg"}/>
            </IconContainer>
            <IconContainer gridArea='z' transform= {-90} justify="flex-end" imgpaddingleft={20} divpaddingright={5} divpaddingleft={30} >
                <Icon src={"/icons/users/Group 7.svg"}  />
            </IconContainer>
            <IconContainer gridArea= 'q' justify='space-around' align="flex-end" >
                <Icon src={"/icons/users/Group 10.svg"} />
            </IconContainer>
            <IconContainer  gridArea= 'w' align="flex-end" >
            <Icon src={"/icons/users/Group 12.svg" }/>
            </IconContainer>
            <IconContainer  gridArea= 'a' justify='flex-start' align="flex-start" >
            <Icon  src={"/icons/bubbles/SpeechBubble1.svg" } />
            </IconContainer>
            <IconContainer  gridArea= 'b' align='flex-end'>
            <Icon  src={"/icons/bubbles/SpeechBubble2.svg"} />
            </IconContainer>
            <IconContainer gridArea= 'c' justify='center'  align='flex-end'>
                <Icon src={"/icons/bubbles/SpeechBubble3.svg"} />
            </IconContainer>
        </Container>
)
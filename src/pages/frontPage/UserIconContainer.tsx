import React from 'react'
import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";
import Icon from '../../components/Icon';

interface IIconContainerProps {
    gridArea: string

}

const IconContainer = styled.div<IIconContainerProps>`
    grid-area: ${(props) => props.gridArea};
    display: flex;
    overflow: hidden;}
    `



export const UserIconContainer = ({
  src,
  gridArea,
  style,
  iconStyle
}: {
  src: string;
  gridArea: string;
  style?: React.CSSProperties;
  iconStyle?: React.CSSProperties
}) => (
    <IconContainer gridArea={gridArea} style={{ ...style }}>
        <Icon src={src} style={{...iconStyle}}/>
    </IconContainer>
);
import React from 'react'
import styled from "styled-components"

const IconComp = styled.img`
max-width:100%;
max-height:100%;
`;


export default function Icon({
    src,
  }: {
    src: string;
  }) {
  return (
    <IconComp src={src} alt="Icon"/>
  )
}

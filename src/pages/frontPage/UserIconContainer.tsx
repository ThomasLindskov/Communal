import React from 'react'
import styled from "styled-components";
import {Icon} from '../../components/Icon';
import data from './groups.json';


const IconContainer = styled.div`
    display: flex;
    overflow: hidden;}
    `

let random = data.sort(() => .5 - Math.random()).slice(0,5)

export const UserIconContainer = ({
  number,
  className,
  setTestimonial
}: {
  number: number;
  className: string;
  setTestimonial: Function;
}) => {
  const handleMouseEnter = () => {
    setTestimonial(makeQuote(random[number].testimonial, random[number].madeBy));
  };
  const handleMouseLeave = () => {
    setTestimonial("Hover over us, to hear our experiences");
  };

  return (
      <IconContainer className={className}>
          <Icon src={random[number].src} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
      </IconContainer>
  );
}

function makeQuote(testimonial:String, madeBy:String) {
  return(<blockquote>
    <p>{testimonial}</p>
    
    <cite>— {madeBy}</cite>
    </blockquote>
    )
  
}
import React from "react";
import styled from "styled-components";
import { Icon } from "../../components/Icon";
import data from "./groups.json";

const IconContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

let random = data.sort(() => 0.5 - Math.random()).slice(0, 5);

export const UserIconContainer = ({
  number,
  className,
  setTestimonial,
  setShow,
}: {
  number: number;
  className: string;
  setTestimonial: Function;
  setShow: Function;
}) => {
  const handleMouseEnter = () => {
    setTestimonial(
      makeQuote(random[number].testimonial, random[number].madeBy)
    );
    setShow(true);
  };
  const handleMouseLeave = () => {
    setTestimonial(makeQuote("Hover over us, to hear our experiences"));
    setShow(false);
  };

  return (
    <IconContainer className={className}>
      <Icon
        src={random[number].src}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </IconContainer>
  );
};

function makeQuote(testimonial: String, madeBy?: String): JSX.Element {
  if (madeBy) {
    return (
      <blockquote>
        <p>{testimonial}</p>
        <cite>— {madeBy}</cite>
      </blockquote>
    );
  } else {
    return (
      <blockquote>
        <p>{testimonial}</p>
      </blockquote>
    );
  }
}

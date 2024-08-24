import React, { useState } from "react";
import styled from "styled-components";
import { UserIconContainer } from "./UserIconContainer";
import "./style/css/userGroup.css";
import { Animation } from "./Animation";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: grid;
  height: 100vh;
  width: 100%;
  grid-auto-rows: 1fr;
  grid-auto-columns: 1fr;
  grid-template-areas:
    ". . . x x x . . . ."
    ". . . x x x . . . ."
    ". . . x x x . . . ."
    ". . . . . . . . . ."
    "y y a a a a a a z z"
    "y y a a a a a a z z"
    "y y a a a a a a z z"
    ". . a a a a a a . ."
    ". q a a a a a a w ."
    ". q a a a a a a w ."
    ". q . . . . . . w .";
`;

export const TestimonialsGroup = () => {
  const [testimonial, setTestimonial] = useState(
    <p>Hover over us, to hear our experiences</p>
  );
  const [show, setShow] = useState(true);

  return (
    <Container>
      {Array(5)
        .fill(true)
        .map((_, i) => (
          <UserIconContainer
            key={"icon" + i}
            className={"grid-area-" + i}
            number={i}
            setTestimonial={setTestimonial}
            setShow={setShow}
          />
        ))}
      <div className="grid-area-a">
        <Animation show={show} testimonial={testimonial} />
      </div>
    </Container>
  );
};

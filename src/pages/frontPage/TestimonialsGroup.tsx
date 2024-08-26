import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { UserIconContainer } from "./UserIconContainer";
import { Animation } from "./Animation";
import data from "./groups.json";




export const TestimonialsGroup = () => {
  const [testimonial, setTestimonial] = useState(
    <p>Hover over us, to hear our experiences</p>
  );
  const [show, setShow] = useState(true);

  const randomIcons = useMemo(() => {
    return data.sort(() => 0.5 - Math.random()).slice(0, 6);
  }, []);

  return (
    <Container>
      <UserIconContainer
        className=""
        iconData={randomIcons[0]}
        setTestimonial={setTestimonial}
        setShow={setShow}
        as={TopCenterRight}
      />

      <UserIconContainer
        className=""
        iconData={randomIcons[1]}
        setTestimonial={setTestimonial}
        setShow={setShow}
        as={TopCenterLeft}
      />

      <UserIconContainer
        className=""
        iconData={randomIcons[2]}
        setTestimonial={setTestimonial}
        setShow={setShow}
        as={LeftCenter}
      />

      <UserIconContainer
        className=""
        iconData={randomIcons[3]}
        setTestimonial={setTestimonial}
        setShow={setShow}
        as={BottomCenterLeft}
      />

      <UserIconContainer
        className=""
        iconData={randomIcons[4]}
        setTestimonial={setTestimonial}
        setShow={setShow}
        as={BottomCenterRight}
      />

      <UserIconContainer
        className=""
        iconData={randomIcons[5]}
        setTestimonial={setTestimonial}
        setShow={setShow}
        as={RightCenter}
      />

      <Cloud>
        <Animation show={show} testimonial={testimonial} />
      </Cloud>
    </Container>
  );
};



const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const Character = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  background-size: cover;
  cursor: pointer;
`;

const TopCenterRight = styled(Character)`
  top: 0;
  left: 75%;
  text-align: center;
  margin-top: -5px;
  transform: translateX(-50%) rotate(180deg);
`;

const TopCenterLeft = styled(Character)`
  top: 0;
  left: 25%;
  text-align: center;
  margin-top: -5px;
  transform: translateX(-50%) rotate(180deg);
`;

const LeftCenter = styled(Character)`
  top: 50%;
  left: 0;
  text-align: center;
  margin-left: -5px;
  transform: translateY(-50%) rotate(90deg);
`;

const BottomCenterLeft = styled(Character)`
  bottom: 0;
  left: 25%;
  margin-bottom: -5px;
  transform: translateX(-50%);
  text-align: center;
`;

const BottomCenterRight = styled(Character)`
  bottom: 0;
  left: 75%;
  margin-bottom: -5px;
  transform: translateX(-50%);
  text-align: center;
`;

const RightCenter = styled(Character)`
  top: 50%;
  right: 0;
  margin-right: -5px;
  transform: translateY(-50%) rotate(-90deg);
  text-align: center;
`;

const Cloud = styled.div`
  background: url("/icons/bubbles/ThoughtBubble.svg") no-repeat;
  background-size: contain;
  height: 100%;
  width: 50%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: larger;
    margin-top: 0;
    margin-bottom: 0;
  }

  cite {
    font-size: smaller;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-enter-active {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-exit-active {
    transition: opacity 300ms;
  }
`;


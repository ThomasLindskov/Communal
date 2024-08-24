import React from "react";
import styled from "styled-components";
import { TestimonialsGroup } from "./TestimonialsGroup";
import FormContainer, { forms } from "./FormContainer";


const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 1200px) {
    #user-group-container {
      display: none;
    }
    justify-content: center;
  }
`;

export default function FrontPage({ form }: { form: forms }) {
  return (
    <Wrapper>
      <FormContainer form={form} />
      <div style={{ width: "100%" }} id="user-group-container">
        <TestimonialsGroup />
      </div>
    </Wrapper>
  );
}

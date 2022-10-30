import React from "react";
import styled from "styled-components";
import FormContainer from "./FormContainer";
import { UserGroup } from "./UserGroup";

const Wrapper = styled.div`
display: flex; 
height: 100vh;
@media (max-width: 1200px) {
  #user-group-container{
    display: none;
  }
  justify-content: center; 
}
`


export default function FrontPage() {
  return (
    <Wrapper>
      <FormContainer />
      <div style={{width: "100%"}} id="user-group-container">
        <UserGroup />
      </div>
    </Wrapper>
  );
}

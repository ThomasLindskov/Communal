import styled from "styled-components";

export const Icon = styled.img`
  max-width: 100%;
  max-height: 100%;
  transition: opacity 0.3s ease; /* Smooth transition for hover effect */
  
  &:hover {
    transform: scale(1.04);
  }
`;
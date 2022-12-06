import styled from "styled-components";

export const CardLink = styled.p`
  color: ${({ theme, color }) => color || theme.colors.primary};
  cursor: pointer;
  margin: 0;
  &:hover {
    opacity: 0.8;
  }
`;

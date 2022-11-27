import styled from "styled-components";

export const CardLink = styled.p<{ selected?: boolean }>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  text-decoration: ${({ selected }) => selected && "underline"};
  cursor: pointer;
  text-decoration: underline;
  margin: 0;
  &:hover {
    opacity: 0.8;
  }
`;

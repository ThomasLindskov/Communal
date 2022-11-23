import styled from "styled-components";

export const CardLink = styled.p<{selected?: boolean}>`
  color: ${({ theme, color }) => color || theme.colors.primary};
  text-decoration: ${({ selected }) => selected && "underline"};
  cursor: pointer;
  text-decoration: ;
  margin: 0;
`;
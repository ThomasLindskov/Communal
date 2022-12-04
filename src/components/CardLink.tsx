import styled from "styled-components";

export const CardLink = styled.p<{ selected?: boolean }>`
color: ${({ theme, color }) => color || theme.colors.primary};
text-decoration: none;
${({ selected }) => selected && "text-decoration: underline;"}
  cursor: pointer;
  margin: 0;
  &:hover {
    opacity: 0.8;
  };
 `;
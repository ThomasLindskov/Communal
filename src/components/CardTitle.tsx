import styled from "styled-components";

export const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

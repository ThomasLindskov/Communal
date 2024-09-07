import styled from "styled-components";

export const Card = styled.div<{ width?: string }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  padding: ${({ theme }) => theme.padding.large};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.flexGap.medium};
  min-width: ${(props) => props?.width || ""};
  width: fit-content;
  align-items: center;
  overflow-y: auto;
`;

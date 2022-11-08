import styled from "styled-components";

export const Card = styled.div<{ width: string }>`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  padding: ${({ theme }) => theme.padding.large};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.padding.medium};
  min-width: ${(props) => props.width || ""};
  width: fit-content;
  align-items: center;
  overflow-y: auto;
`;

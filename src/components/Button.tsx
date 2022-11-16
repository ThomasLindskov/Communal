import styled from "styled-components";

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.utils.buttonBorderRadius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${(props) => props.color};
  padding-left: ${({ theme }) => theme.padding.xxl};
  padding-right: ${({ theme }) => theme.padding.xxl};
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: none;
  filter: drop-shadow(${({ theme }) => theme.utils.dropShadow});
  font-weight: bold;
  &:hover {
    cursor: pointer;
    opacity: 0.95; // TODO: improve
  }
  width: fit-content;
  /* ${({ disabled }) =>
    disabled &&
    `
    disabled
  `} */
  /* TODO: add disabled state */
  /* TODO: add onClick */
`;

import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  disabled: props.disabled,
}))`
  border-radius: ${({ theme }) => theme.utils.buttonBorderRadius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${(props) => props.color};
  padding: 6px ${({ theme }) => theme.padding.xxl};
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: none;
  filter: drop-shadow(${({ theme }) => theme.utils.dropShadow});
  font-weight: bold;
  &:hover {
    ${({ disabled }) => !disabled && "cursor: pointer; opacity: 0.90;"}
  }
  width: fit-content;
  ${({ disabled }) => disabled && "opacity: 0.3;"}
`;

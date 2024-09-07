import styled from "styled-components";

export const Button = styled.button.attrs((props) => ({
  disabled: props.disabled,
  color: props.color,
}))`
  border-radius: ${({ theme }) => theme.utils.buttonBorderRadius};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ color }) => color};
  padding: 12px ${({ theme }) => theme.padding.xxl};
  font-size: ${({ theme }) => theme.fontSize.medium};
  border: none;
  box-shadow: ${({ theme }) => theme.utils.boxShadow};
  font-weight: bold;
  &:hover {
    ${({ disabled }) => !disabled && "cursor: pointer; opacity: 0.90;"}
  }
  width: fit-content;
  ${({ disabled }) => disabled && "opacity: 0.3;"}
`;

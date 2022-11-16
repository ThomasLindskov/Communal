import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding-left: ${({ theme }) => theme.padding.medium};
  padding-right: ${({ theme }) => theme.padding.medium};
  padding-top: ${({ theme }) => theme.padding.large};
  padding-bottom: ${({ theme }) => theme.padding.large};
  color: ${({ theme }) => theme.colors.secondary};
  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const InputField = ({
  id,
  label,
  type,
  placeholder,
  style,
  register,
}: {
  id?: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  style?: {
    div?: React.CSSProperties;
    input?: React.CSSProperties;
  };
  register?: UseFormRegisterReturn;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      width: "100%",
      ...style?.div,
    }}
  >
    {label && <Label htmlFor={id}>{label}</Label>}
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      style={{ ...style?.input }}
      {...register}
    />
  </div>
);

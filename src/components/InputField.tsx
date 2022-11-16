import { HTMLInputTypeAttribute } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { theme } from "src/theme";
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

const Label = styled.label<{ color: string }>`
  color: ${(props) => props.color};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const InputField = ({
  id,
  label,
  type,
  placeholder,
  style,
  register,
  errorMessage,
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
  errorMessage?: string;
}) => (
  <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        width: "100%",
        ...style?.div,
      }}
    >
      {label && (
        <Label htmlFor={id} color={theme.colors.secondary}>
          {label}
        </Label>
      )}
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        style={{
          ...style?.input,
          ...(errorMessage && { borderColor: theme.colors.risk }),
        }}
        {...register}
      />
      {errorMessage && (
        <Label htmlFor={id} color={theme.colors.risk}>
          {errorMessage}
        </Label>
      )}
    </div>
  </>
);

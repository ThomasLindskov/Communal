import { HTMLInputTypeAttribute } from "react";
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
}: {
  id?: string;
  label?: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
    {label && <Label htmlFor={id}>{label}</Label>}
    <Input id={id} type={type} placeholder={placeholder} />
  </div>
);

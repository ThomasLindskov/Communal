import { ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { theme } from "src/theme";
import styled from "styled-components";

const SelectElements = styled.select`
  border-radius: ${({ theme }) => theme.utils.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  padding-left: ${({ theme }) => theme.padding.medium};
  padding-right: ${({ theme }) => theme.padding.medium};
  padding-top: ${({ theme }) => theme.padding.large};
  padding-bottom: ${({ theme }) => theme.padding.large};
  color: ${({ theme }) => theme.colors.secondary};

  option {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Label = styled.label<{ color: string }>`
  color: ${(props) => props.color};
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const Select = ({
  id,
  label,
  style,
  register,
  errorMessage,
  children,
  onChange,
}: {
  id?: string;
  label?: string;
  style?: {
    div?: React.CSSProperties;
    input?: React.CSSProperties;
  };
  register?: UseFormRegisterReturn;
  errorMessage?: string;
  children?: ReactNode[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) => (
  <>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: theme.flexGap.small,
        width: "100%",
        ...style?.div,
      }}
    >
      {label && (
        <Label htmlFor={id} color={theme.colors.secondary}>
          {label}
        </Label>
      )}
      <SelectElements
        id={id}
        style={{
          ...style?.input,
          fontSize: theme.fontSize.medium,
          ...(errorMessage && { borderColor: theme.colors.risk }),
        }}
        {...register}
        onChange={onChange}
      >
        {children && children}
      </SelectElements>
      {errorMessage && (
        <Label htmlFor={id} color={theme.colors.risk}>
          {errorMessage}
        </Label>
      )}
    </div>
  </>
);

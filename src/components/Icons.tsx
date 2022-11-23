import { AiOutlineCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import styled from "styled-components";

export const Icon = styled.div`
  color: ${(props) => props.color};
  font-size: ${({ theme }) =>
    theme.fontSize.medium};
  display: flex;
`;

export function RemoveIcon({ color }: { color?: string }) {
  return (
    <Icon color={color} className="corner-icon">
      <AiOutlineCloseCircle />
    </Icon>
  );
}

export function AddIcon({ color }: { color?: string }) {
  return (
    <Icon color={color}>
      <AiFillPlusCircle />
    </Icon>
  );
}
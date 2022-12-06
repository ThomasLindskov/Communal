import { AiOutlineCloseCircle, AiFillPlusCircle } from "react-icons/ai";
import styled from "styled-components";

//xx to create icons inside input: https://codesandbox.io/s/broken-shadow-c5wxp?file=/src/search-bar.tsx

export const Icon = styled.div`
  color: ${(props) => props.color};
  font-size: ${({ theme }) =>
    theme.fontSize.medium}; //Have this as a prop at some point
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

//font-size: ${(props) => props.fontSize};

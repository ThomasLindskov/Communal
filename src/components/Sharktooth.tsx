import React from "react";
import styled from "styled-components";

//TODO: Use react-router-dom to navigate to home page when Logo is clicked
const SharktoothFigure = styled.figure`
  margin: 0;
`;

export default function Sharktooth({
  color,
  borderColor,
}: {
  color: string;
  borderColor: string;
}) {
  return (
    <SharktoothFigure className="logo-main">
      <svg
        width="13"
        height="20"
        viewBox="0 0 13 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13 0L13 19.9706L0.514719 9.98528L13 0Z" fill={borderColor} />
        <path
          d="M13 1.41431L13 18.5564L1.92893 9.98537L13 1.41431Z"
          fill={color}
        />
      </svg>
    </SharktoothFigure>
  );
}

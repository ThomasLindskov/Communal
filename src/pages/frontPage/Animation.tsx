import React, { useRef } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const Animation = ({
  show,
  testimonial,
}: {
  show: boolean;
  testimonial: JSX.Element;
}) => {
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = show ? helloRef : goodbyeRef;
  return (
    <div className="main">
      <SwitchTransition mode={"out-in"}>
        <CSSTransition
          key={show as any}
          nodeRef={nodeRef}
          addEndListener={(done: HTMLElement) => {
            // @ts-ignore
            nodeRef.current.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <div ref={nodeRef}>
            <span>{testimonial}</span>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
};

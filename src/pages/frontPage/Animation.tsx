import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const Animation = ({
  show,
  testimonial
}: {
  show: boolean;
  testimonial: String;
}) => {
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = show ? helloRef : goodbyeRef;
  return ( 
    <div className="main">
      <SwitchTransition mode={"out-in"}>
        {/*@ts-ignore: do not remove or change the line under this. the key value confuses TS*/}
        <CSSTransition key={show}
          nodeRef={nodeRef}
          addEndListener={(done: any) => {
            // @ts-expect-error: ts thinks noderef and current are never, which they are not
            nodeRef.current.addEventListener("transitionend", done, false);}}
            classNames="fade">
          <div ref={nodeRef} className="button-container">
            <span>
              {show ? testimonial : "Hover over us, to hear our experiences"}
            </span>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}





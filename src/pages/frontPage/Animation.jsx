import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const Animation = ({
  show,
  testimonial
}) => {
  const helloRef = useRef(null);
  const goodbyeRef = useRef(null);
  const nodeRef = show ? helloRef : goodbyeRef;
  return (
      <div className="main">
        <SwitchTransition mode={"out-in"}>
          <CSSTransition
            key={show}
            nodeRef={nodeRef}
            addEndListener={(done) => {
              nodeRef?.current?.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
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





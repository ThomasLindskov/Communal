import React from "react";
import { Icon } from "../../components/Icon";
import data from "./groups.json";



export const UserIconContainer = ({
  iconData,
  className,
  setTestimonial,
  setShow,
  as: Component = 'div'
}: {
  iconData: { src: string; testimonial: string; madeBy: string };
  className: string;
  setTestimonial: Function;
  setShow: Function;
  as?: React.ElementType;
}) => {
  const handleMouseEnter = () => {
    setTestimonial(
      makeQuote(iconData.testimonial, iconData.madeBy)
    );
    setShow(true);
  };

  const handleMouseLeave = () => {
    setTestimonial(makeQuote("Hover over us, to hear our experiences"));
    setShow(false);
  };

  return (
    <Component className={className}>
      <Icon
        src={iconData.src}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </Component>
  );
};

function makeQuote(testimonial: String, madeBy?: String): JSX.Element {
  if (madeBy) {
    return (
      <blockquote>
        <p>{testimonial}</p>
        <cite>— {madeBy}</cite>
      </blockquote>
    );
  } else {
    return (
      <blockquote>
        <p>{testimonial}</p>
      </blockquote>
    );
  }
}

import React from "react";
import { IconStyle } from "../../components/Icon";
import { Icon } from "src/types/Icon";



export const UserIconContainer = ({
  iconData,
  className,
  setTestimonial,
  setShow,
  as: Component = 'div'
}: {
  iconData: Icon;
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
      <IconStyle
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

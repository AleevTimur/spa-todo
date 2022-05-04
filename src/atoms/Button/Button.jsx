import cn from "classnames";
import React from "react";
import s from "./styles.module.scss";

const { button, card, accent } = s;

export const Button = ({ onClick, variant, children, className, ...props }) => {
  console.log(props);
  return (
    <button
      className={cn(button, className, {
        [card]: variant === "card",
        [accent]: variant === "accent",
      })}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
};

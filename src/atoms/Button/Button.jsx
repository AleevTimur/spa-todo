import cn from "classnames";
import React from "react";
import s from "./styles.module.scss";

const { button, card, accent, minimal } = s;

export const Button = ({ onClick, variant, children, className, ...props }) => {
  return (
    <button
      className={cn(button, className, {
        [card]: variant === "card",
        [accent]: variant === "accent",
        [minimal]: variant === "minimal",
      })}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
};

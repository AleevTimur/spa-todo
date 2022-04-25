import React from "react";
import s from "./styles.module.scss";
import PropTypes from "prop-types";

export const InputField = ({ value, onChange, onPressEnter, ...props }) => {
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onPressEnter();
    }
  };
  return (
    <input
      type="text"
      onKeyPress={onKeyPress}
      value={value}
      onChange={onChange}
      {...props}
      className={props.className ? `${props.className} ${s.input}` : s.input}
    />
  );
};

InputField.propTypes = {
  value: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func.isRequired,
  handlePressEnter: PropTypes.func,
};

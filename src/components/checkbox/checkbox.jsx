import React from "react";
import CheckboxStyle from "./checkbox.module.scss";

export const CheckboxExample = ({ text }) => {
  return (
    <div className={CheckboxStyle.checkbox_main}>
      <input className={CheckboxStyle.input_main} type="checkbox" />
      <p>{text}</p>
    </div>
  );
};

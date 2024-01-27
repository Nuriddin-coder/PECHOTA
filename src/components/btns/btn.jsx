import React from "react";
import BtnStyle from "./btn.module.scss";

export const Btn = ({ color, bgclr, children }) => {
  return (
    <button style={{ color: color, backgroundColor: bgclr }} className={BtnStyle.btn_main}>
      {children}
    </button>
  );
};

import React from "react";

const Button = ({ type, classes, children, props }) => {
  let styles;
  if (type !== "primary") {
    styles = classes ? `button-${type} ${classes}` : `button-${type}`;
  } else {
    styles = classes ? `button ${classes}` : `button`;
  }
  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;

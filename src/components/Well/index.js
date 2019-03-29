import React from "react";

const Well = ({ classes, children }) => {
  return (
    <div className={`open-sans ba b-heritage-blue b-width-2 b-radius-2 p-4 pb-5 ${classes}`}>
      {children}
    </div>
  );
};

export default Well;

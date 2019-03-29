import React from "react";

const Well = (props) => {
  return (
    <div className="open-sans ba b-heritage-blue b-width-2 b-radius-2 p-4 pb-5">
      {props.children}
    </div>
  );
};

export default Well;

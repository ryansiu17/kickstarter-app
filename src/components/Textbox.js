import React from "react";

const Textbox = props => {
  return (
    <div className="textbox">
      <h1 className="textHeader">{props.header}</h1>
      <p className="textBody">{props.body}</p>
    </div>
  );
};
export default Textbox;

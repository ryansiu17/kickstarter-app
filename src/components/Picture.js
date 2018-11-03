import React from "react";

const Picture = props => {
  return <img className="picture" src={props.source} alt={props.alt} />;
};
export default Picture;

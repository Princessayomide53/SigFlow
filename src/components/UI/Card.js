import React from "react";

const Card = (props) => {
  const card = " card " + props.className;
  return <div className={card}>{props.children}</div>;
};

export default Card;

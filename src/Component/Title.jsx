import React from "react";

export default function Title(props) {
  return (
    <div className="title">
      <p className="text">{props.children}</p>
    </div>
  );
}

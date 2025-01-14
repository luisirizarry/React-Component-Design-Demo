import React from "react";
import "./Die.css";

/** Single die . */

const Die = ({val}) => {
  return (
    <div className="Die">
      {val}
    </div>
  )
}

export default Die;

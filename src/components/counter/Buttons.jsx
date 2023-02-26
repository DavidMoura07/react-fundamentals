import React from "react";

const Buttons = props => {
  return (
    <div>
      <button onClick={props.setIncrement}>+</button>
      <button onClick={props.setDecrement}>-</button>
    </div>
  )
}

export default Buttons
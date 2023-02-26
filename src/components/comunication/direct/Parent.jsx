import React from "react";
import Child from "./Child"

const Parent = props => {
  return (
    <div>
      <Child name="Junior" age={20} nerd={true} />
      <Child name="Gabriel" age={17} nerd={false} />
    </div>
  )
}

export default Parent
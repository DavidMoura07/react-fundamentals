import React from "react";

const Family = props => {

  return (
    <div>
      {
        props.children.map( (child, i) => React.cloneElement(child, { ...props, key: i }))
      }
    </div>
  )
}

export default Family
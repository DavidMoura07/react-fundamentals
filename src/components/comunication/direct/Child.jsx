import React from "react";

const Child = props => {
  return (
    <div>
      <span> { props.name } </span>
      <span> <strong>{ props.age }</strong> </span>
      <span> { props.nerd ? 'Nerd' : 'Não nerd' }! </span>
    </div>
  )
}

export default Child
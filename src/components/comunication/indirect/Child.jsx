import React from "react";

const Child = props => {
  const min = 1
  const max = 100
  const generateAge = () => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <div>
      <div>Child</div>
      <button onClick={_ => props.whenClick("Jhon", generateAge(), generateAge() % 2 === 0)}>
        Give Informations
      </button>
    </div>
  )
}

export default Child
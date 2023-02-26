import React, { useState } from "react";
import Child from "./Child"

const Parent = props => {
  let [name, setName] = useState('?')
  let [age, setAge] = useState(0)
  let [nerd, setNerd] = useState(false)

  function giveInformations(name, age, nerd) {
    setName(name);
    setAge(age);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{name}</span>
        <span> {age} </span>
        <span>{nerd ? 'Nerd' : 'Not Nerd'}</span>
      </div>
      <Child whenClick={giveInformations} />
    </div>
  )
}

export default Parent
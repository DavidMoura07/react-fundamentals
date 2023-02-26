import React, { useState } from "react";
import "./Input.css";

const Input = props => {
  const [value, setValue] = useState('Start')

  const whenChange = e => {
    setValue(e.target.value)
  }

  return (
    <div className="Input">
      <h2>{ value }</h2>
      <input value={value} onChange={whenChange}/> 
      <input value={value} readOnly/> {/* controlled component readOnly */}
      <input value={undefined}/> {/* uncontrolled component */}
    </div>
  )
}

export default Input
import React from "react";

const StepForm = props => {
  return (
    <div>
      <label htmlFor="stepInput">Steps: </label>
      <input 
        id="stepInput" 
        type="number" 
        value={props.steps} 
        onChange={e => props.setStep(+e.target.value)}
      />
    </div>
  )
}

export default StepForm
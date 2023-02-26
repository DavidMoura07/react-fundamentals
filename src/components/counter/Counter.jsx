import React, { Component } from "react";
import Buttons from "./Buttons";
import "./Counter.css"
import Display from "./Display";
import StepForm from "./StepForm";

class Counter extends Component {

  state = {
    number: this.props.startNumber || 0,
    steps: this.props.steps || 1,
  }

  inc = () => {
    this.setState({
      number: this.state.number + this.state.steps
    })
  }

  dec = () => {
    this.setState({
      number: this.state.number - this.state.steps
    })
  }

  setStep = (newStep) => this.setState({
    steps: newStep
  })

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <Display number={this.state.number} />
        <StepForm steps={this.state.steps} setStep={this.setStep} />
        <Buttons setIncrement={this.inc} setDecrement={this.dec} />
      </div>
    )
  }
}

export default Counter
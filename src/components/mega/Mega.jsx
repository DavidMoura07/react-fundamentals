import React, { useState } from "react";
import Ball from "./Ball";
import './Mega.css';

const generateNumbers = (range, qtt) =>  {
  const [ start, end ] = range
  const numbers = []
  while (numbers.length < qtt) {
    const randNum = Math.floor(Math.random() * (end - start + 1) + start)
    if (!numbers.includes(randNum)) {
      numbers.push(randNum)
    }
  }
  return numbers.sort((a, b) => a - b)
}

const Mega = props => {
  const [start, setStart] = useState(props.start || 1)
  const [end, setEnd] = useState(props.end || 60)
  const [qtt, setQtt] = useState(props.qtt || 6)
  
  const [numbers, setNumbers] = useState(generateNumbers([start, end], qtt) || [])
  const megaNumbers = () => numbers.map( (n,i) => <Ball key={i}>{n}</Ball>)

  const setNewNumbers = () => setNumbers(generateNumbers([start, end], qtt))

  return (
    <div className="Mega">
      <div className="Input">
        <h2>Mega-Sena Generator</h2>
        <div>
          <label htmlFor="rangeStart">Start: </label>
          <input 
            id="rangeStart" 
            type="number" 
            value={start} 
            onChange={e => setStart(+e.target.value)}
          />
          <label htmlFor="rangeEnd">End: </label>
          <input 
            id="rangeEnd" 
            type="number" 
            value={end} 
            onChange={e => setEnd(+e.target.value)}
          />
        </div>
        <div className="Quantity">
          <label htmlFor="quantity">Quantity of Numbers: </label>
          <input 
            id="quantity" 
            type="number" 
            value={qtt} 
            onChange={e => setQtt(+e.target.value)}
          />
        </div>
        <button onClick={setNewNumbers}>Generate</button>
      </div>
      <div className="MegaNumbers">
        {megaNumbers()}
      </div>
    </div>
  )
}

export default Mega
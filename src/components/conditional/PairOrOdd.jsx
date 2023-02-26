import React from "react";

const PairOrOdd = props => {
  const isPair = props.number % 2 === 0
  return (
    <div>
      { isPair ? <span>Pair</span> : <span>Odd</span> }
    </div>
  )
}

export default PairOrOdd
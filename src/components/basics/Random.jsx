import React from "react";

const Random = ({ min, max }) => (
  <p>Min: { min } | Max: { max } | Rand: { Math.floor(Math.random() * (max - min + 1) + min) }</p>
)

export default Random
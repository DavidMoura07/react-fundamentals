import React from "react"

export default function WithParameters({ title, subtitle}) {
  return (
    <div>
      <h2>{ title }</h2>
      <h3>{ subtitle }</h3>
    </div>
  )
}
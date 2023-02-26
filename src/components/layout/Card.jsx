import React from "react";
import "./Card.css"
export default function Card({ title, children, bgColor, contentBgColor }) {

  const cardStyle = {
    backgroundColor: bgColor || "#61bdcd",
    border: `3px solid ${bgColor || "#61bdcd"}`,
  }

  const contentStyle = {
    backgroundColor: contentBgColor || "#EEE",
  }

  return (
    <div className="Card" style={ cardStyle }>
      <div className="Title" style={ cardStyle }>{ title }</div>
      <div className="Content" style={ contentStyle }>{ children }</div>
    </div>
  )
}
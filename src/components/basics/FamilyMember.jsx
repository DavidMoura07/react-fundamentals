import React from "react";

const FamilyMember = props => {
  return (
    <div>{ props.firstName } <strong>{ props.familyName }</strong></div>
  )
}

export default FamilyMember
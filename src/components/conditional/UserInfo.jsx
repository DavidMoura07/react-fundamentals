import React from "react";
import If, { Else } from "./If";

const UserInfo = props => {
  return (
    <div>
      <If test={ props.user && props.user.name }>
        Welcome <strong>{ props.user.name }</strong>
        <Else>
          Welcome <strong>my friend </strong>
        </Else>
      </If>
    </div>
  )
}

export default UserInfo
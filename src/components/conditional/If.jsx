const If = props => {
  
  const elsesChildren = props.children.filter(child => child.type && child.type.name === 'Else')
  const children = props.children.filter(child => !elsesChildren.includes(child))
  
  if (props.test) {
    return children
  } else if (elsesChildren.length > 0) {
    return elsesChildren
  } else {
    return false
  }
}
export const Else = props => props.children

export default If

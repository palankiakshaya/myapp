import React from 'react'

export default function App8(props) {
  App8.defaultProps={name:"Akshaya", age:21};
  return(
    <div style={{backgroundColor:'yellow'}}>
        Hello{props.name}.you are{props.age}
    </div>
  )
}
App8.defaultProps={name:"Akshaya", age:21};
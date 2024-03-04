import React from 'react'
import Login from './Login'
import Home from './Home'
//using logical operator(Ambursent)//
export default function App2(props) {
   return props.user==="" && (<div> 
    <h2>Login Form</h2>
<p>
    <input type="text" placeholder="Enter Username" />
    </p>
<p>
    <input type="password" placeholder="Enter Password" />
    </p>
<p>
    <button>Login</button>
    </p>   
   </div>) 
 
}
// using ternary apartments//
// return (props.user===""? < Login/> : <Home username={props.user} />)
// using if else condition//
// if (props.user==="") {
//     return <Login />
//   }else{
//     return <Home username={props.user} />
//   }

// (<div>Hello {props.username}</div>)


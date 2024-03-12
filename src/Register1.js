import React, { useContext } from 'react'
import Home1 from './Home1'
import { UserContext } from './App19a'

export default function Register1() {
    const {flag,setFlag}=useContext(UserContext);
  return (
    <>
    <div>Register1</div>
    <button onClick={() => setFlag((prevState) => 1)}>Submit</button>
    </>
  )
  }
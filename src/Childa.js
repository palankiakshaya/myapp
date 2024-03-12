import {UserContext} from "./App18a"
import { useContext } from "react";
export default function Childa() {
  const {user,setUser} = useContext(UserContext);
  return (
    <>
      <h2>Hello {user} from Child component</h2>
      <button onClick={()=>setUser((prevState)=>"Cathy")}>Change to Cathy</button>
    </>
  );
}
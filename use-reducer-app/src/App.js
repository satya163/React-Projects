import React, { useReducer } from 'react'

export default function App() {
  var [x,updateX]=useReducer(funred,100)
  function funred(oldval,newval){
    alert(oldval)
    alert(newval)
    return newval;
  }
  return (
    <div>
      <h3>{x}</h3>
      <br />
      <input type='button' value="Click" onClick={()=>updateX(200)} />
    </div>
  )
}

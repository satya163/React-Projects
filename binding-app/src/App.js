import React from 'react'

export default function App() {
  let sno=100;
  function fun1(){
    alert("Function called")
    sno=222;
    alert(sno);
  }
  return (
    <div>
      <h1>{sno}</h1>
      <input type='text' value={sno} />
      <input type='button' value="Click" onClick={fun1}/>
    </div>
  )
}

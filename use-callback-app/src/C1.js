import React from 'react'

function C1(props) {
    console.log("Component wrapped")
  return (
    <div>
      C1
      <br />
      <input type='button' value="Click" onClick={props.funRef} />
    </div>
  )
}
export default React.memo(C1)
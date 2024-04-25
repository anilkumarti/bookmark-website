import React from 'react'

const Basic = (props) => {
  return (
    <div>
    <h2>BookMark Website</h2>
    <button onClick={props.onClick} >Add BookMark </button>
    {console.log("cddd")}
    </div>
  )
}

export default Basic

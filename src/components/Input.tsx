import React from 'react'
type inputProps  = {
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void,
    value:string
}
const Input = (props:inputProps) => {
  return (
    <div>
        <input type="text" onChange={props.handleChange} />
    </div>
  )
}

export default Input
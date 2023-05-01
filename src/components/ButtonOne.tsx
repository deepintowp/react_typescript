import React from 'react'
type ButtonOneProps = {
    handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:number) =>void
}
export const ButtonOne = (props:ButtonOneProps) => {
  return (
    <button onClick={event=>props.handleClick(event, 2)} >click event</button>
  )
}

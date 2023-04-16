import React from "react"

type buttonProps = {
    handleClick:  (event:React.MouseEvent<HTMLButtonElement>, id:number) => void
}

const Button = (props:buttonProps) => {
  return (
    <button onClick={event=>props.handleClick(event, 2)} >Click</button>
  )
}

export default Button
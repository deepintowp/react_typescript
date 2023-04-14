import React from 'react'
type OscerProps = {
    children:React.ReactNode
}
const Oscer = (props:OscerProps) => {
  return (
    <div className='oscerWrap' >{props.children}</div>
  )
}

export default Oscer
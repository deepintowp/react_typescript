import React from 'react'
type StylepropsProps = {
    style:React.CSSProperties
}
const StyleProps = (props:StylepropsProps) => {
  return (
    <div style={props.style}>StyleProps</div>
  )
}

export default StyleProps
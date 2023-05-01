import React, {useEffect, useRef} from 'react'

const DemoRef = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
        inputRef.current?.focus()
    },[])
  return (
    <div>
        <input ref={inputRef} type="text" />
    </div>
  )
}

export default DemoRef
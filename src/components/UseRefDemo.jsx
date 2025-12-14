import React, { useEffect, useRef } from 'react'

export const UseRefDemo = () => {

    const inputRef  = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])

  return (
    <div>
        <h1>UseRefDemo</h1>
        <div>
            <label >NAME</label>
            <input ref={inputRef} type="text" />
        </div>

        </div>
  )
}

import React, { useState } from 'react'

export default function Error({ name, visible }) {
  const [show, setShow] = useState(visible)

  const handleClick = () => {
    setShow(false)
  }

  return (
    <>
      {show && (
        <div
          onClick={handleClick}
          className="
            absolute 
            top-1/4 
            left-1/2 
            transform 
            -translate-x-1/2 
            p-4 
            bg-error 
            hover:bg-opacity-80
            cursor-pointer
          "
        >
          <p className="text-white">
            {name} unsuccessfull, please try again later &#9587;
          </p>
        </div>
      )}
    </>
  )
}

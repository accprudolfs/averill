import React from 'react'

export default function Button(props) {
  return (
    <button className="bg-light-bg-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      {props.children}
    </button>
  )
}

import React from 'react'

export default function Spinner(props) {
  const height = props.height || 4
  const weidth = props.weidth || 4
  const spinnerClass = `animate-spin rounded-full h-${height} w-${weidth} border-b-2 border-gray-900`
  return (
    <div className="flex justify-center items-center">
      <div className={spinnerClass}></div>
    </div>
  )
}

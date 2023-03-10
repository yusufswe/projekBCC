import React from 'react'

const Button = ({children, type, width}) => {
  return (
    <div>
      <button type={type} width={width} className="bg-BeauBlue rounded-2xl text-Black  px-5 hover:scale-105 duration-400">{children}</button>
    </div>
  )
}

export default Button

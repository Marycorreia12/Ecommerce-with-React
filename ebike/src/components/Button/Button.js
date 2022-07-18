import React from 'react'
import './button.css'

const Button = ({texto, padding, margin, width, props}) => {
  return (
    <button className='button' style={{padding: padding, margin: margin, width: width}} {...props}>{texto}</button>
  )
}

export default Button

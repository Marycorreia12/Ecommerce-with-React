import React from 'react'
import './button.css'

const Button = ({texto, padding, margin}) => {
  return (
    <button className='button' style={{padding: padding, margin: margin}}>{texto}</button>
  )
}

export default Button

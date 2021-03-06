import React from 'react'
import styles from './Button.module.css'

const Button = ({texto, padding, margin, width, props}) => {
  return (
    <button className={styles.button} style={{padding: padding, margin: margin, width: width}} {...props}>{texto}</button>
  )
}

export default Button

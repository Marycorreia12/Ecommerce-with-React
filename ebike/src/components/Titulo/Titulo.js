import React from 'react'
import './titulo.css'

const Titulo = ({texto, cor}) => {
  return (
    <div className='title-container'>
        <h1 className='title' style={{color: cor}}>{texto}</h1>
    </div>
  )
}

export default Titulo

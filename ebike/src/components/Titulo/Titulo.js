import React from 'react'

const Titulo = ({texto, cor}) => {
  return (
    <div className='title-bg'>
        <h1 className='title' style={{color: cor}}>{texto}</h1>
    </div>
  )
}

export default Titulo

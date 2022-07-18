import React from 'react'

const SubTitle = ({cor, texto, textAline}) => {
  return (
    <div style={{fontSize: '3.125rem', lineHeight: '4.5rem'}}>
        <h3 className='sub-title' style={{color: cor, textAlign: textAline}}>{texto}</h3>
    </div>
  )
}

export default SubTitle

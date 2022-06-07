import React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Navbar from '../../components/Navbar/Navbar'

const Gallery = () => {
  return (
    <>
       <section>
         <Navbar/>
       </section>
       <section>
        <Titulo texto = 'GALLERY' cor='#FFD910'/>
       </section>
    </>
  )
}

export default Gallery

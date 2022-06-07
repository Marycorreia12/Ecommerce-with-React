import React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Navbar from '../../components/Navbar/Navbar'

const About = () => {
  return (
    <>
       <section>
         <Navbar/>
       </section>
       <section>
        <Titulo texto = 'ABOUT US' cor='#FFD910'/>
       </section>
    </>
  )
}

export default About

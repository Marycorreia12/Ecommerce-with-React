import React from 'react'
import Titulo from '../../components/Titulo/Titulo'
import Navbar from '../../components/Navbar/Navbar'

const News = () => {
  return (
    <>
    <section>
      <Navbar/>
    </section>
    <section>
     <Titulo texto = 'NEWS' cor='#FFD910'/>
    </section>
 </>
  )
}

export default News

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Titulo from '../../components/Titulo/Titulo'

const Home = () => {
  return (
    <>
      <section>
          <Navbar/>
      </section>
      <section>
        <Titulo texto = 'BEST BIKES FOR YOU' cor='#192330'/>
      </section>
    </>

  )
}

export default Home

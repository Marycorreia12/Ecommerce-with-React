import React from 'react'
import './home.css'
import HomeSearch from '../../components/HomeSearch/HomeSearch'
import Hero from '../../components/Hero/Hero'
import HomeBackground from '../../components/HomBackground/HomeBackground'
import Head from '../../components/Head/Head'

const Home = () => {
  return (
    <>
      <Head title="Best bikes for you" description="Essa é a descrição da Home" />
      <Hero/>
      <HomeSearch/>
      <HomeBackground/>
    </>
  )
}

export default Home

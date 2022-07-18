import React from 'react'
import GalleryImages from '../../components/GalleryImages/GalleryImages'
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle'
import Head from '../../components/Head/Head'

const Gallery = () => {
  return (
    <>
     <Head title="Gallery" description="Essa é a descrição da Gallery" />
      <HeaderTitle texto = 'GALLERY'/>
      <GalleryImages/>
    </>
  )
}

export default Gallery

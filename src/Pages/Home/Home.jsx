import React from 'react'
import Banner from './Banner'
import Catagory from './Catagory'
import ShortAbout from './ShortAbout'
import OurMenu from './OurMenu'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <ShortAbout></ShortAbout>
      <OurMenu></OurMenu>
    </div>
  )
}

export default Home
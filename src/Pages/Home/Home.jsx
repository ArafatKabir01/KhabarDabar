import React from 'react'
import Banner from './Banner'
import Catagory from './Catagory'
import ShortAbout from './ShortAbout'
import OurMenu from './OurMenu'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-screen-xl mx-auto p-2'>
        <Catagory></Catagory>
        <ShortAbout></ShortAbout>
        <OurMenu></OurMenu>
      </div>

    </div>
  )
}

export default Home
import React , { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchEngine from '../components/SearchEngine'
import Exercises from '../components/Exercises'


function Home() {
  return (
    <div>
    <HeroBanner/>
    <SearchEngine/>
    <Exercises/>
    </div>
  )
}

export default Home

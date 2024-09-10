import React , { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import SearchEngine from '../components/SearchEngine'
import Exercises from '../components/Exercises'


function Home() {

  const [exercises , setexercises] = useState([]);
  const [bodyPart , setBodyPart] = useState("all");

  return (
    <div>
    <HeroBanner/>
    <SearchEngine setexercises={setexercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Exercises setexercises={setexercises} bodyPart={bodyPart} exercises={exercises} />
    </div>
  )
}

export default Home

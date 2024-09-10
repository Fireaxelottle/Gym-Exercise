import React from 'react'
import { useState , useEffect } from 'react'
import { exerciseOptions , featchData } from '../utils/featchData'
import HorizontalScrollBar from './HorizontalScrollBar'

const SearchEngine = ({setexercises , bodyPart , setBodyPart}) => {
  
  const [search , setSearch] = useState('');
  const [bodyParts , setBodyParts] = useState([]);

  useEffect(() => { 
    const fetchExercisesData = async () => {
    const bodyPartsData = await  featchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList" , exerciseOptions)
    
    setBodyParts(["all" , ...bodyPartsData]);
    } 
  
    fetchExercisesData();

}, [] )
    

  const handleClick = async () => {
    if (search) {
      const exerciseData = await featchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      const searchedExercises = exerciseData.filter( 
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch('');
      setexercises(searchedExercises);
    }
  } 

  return (
    <div style={{display: 'flex', justifyContent: 'center' , flexDirection: 'column', alignItems: 'center' , padding: '12rem 3rem 2rem 3rem' }}>

      <p style={{fontSize: '2rem', fontWeight: '580' , textAlign: 'center', lineHeight: '1.5'}}>Awsome Exercises You <br /> Should Know </p>

      <div style={{position: 'relative'}}>

        <input value={search} type="text" placeholder='Search Exercises' style={{width: '50vw', height: '3rem', borderRadius: '5px', outline: 'none', padding: '0 15px', fontSize: '1.2rem'}} onChange={(e)=>{setSearch(e.target.value.toLocaleLowerCase())}}/>

         <button className='search' onClick={handleClick}>Search</button> 
      </div>
       
       <div style={{position: 'relative', marginTop: '2rem' , padding: '2rem', textAlign: 'center'}}>
        <h1>Exercises By Body Part</h1>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
       </div>

  </div>
  )
}

export default SearchEngine

import React , { useState , useEffect } from 'react'
import { exerciseOptions , featchData } from '../utils/featchData'
import ExerciseCard from './ExerciseCard';

const Exercises = ({setexercises , bodyPart , exercises}) => {

  useEffect(() => {
    const fetchExercisesData = async () => {

      let exerciseData = [];

      if (bodyPart === "all") {
         exerciseData = await featchData("https://exercisedb.p.rapidapi.com/exercises" , exerciseOptions);

      } else {
        exerciseData = await featchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}` , exerciseOptions);
      }
        
      setexercises(exerciseData);
      
    }
    fetchExercisesData();
  } , [bodyPart])

  console.log(exercises);
  return (
    <div id='exercises' className="exercises-container" 
    style={{textAlign: "center"}}>
      <h2>Showing Results</h2>
      <div style={{display: "flex" , justifyContent: "space-evenly", flexWrap: "wrap"}}>
        {exercises.map((exercise,index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </div>
    </div>
  )
}

export default Exercises

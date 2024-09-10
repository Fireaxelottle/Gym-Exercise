import React from 'react'
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercise}) => {
  console.log(exercise.gifUrl)
  return (
    <Link className='execise-card' to={`/exercise/${exercise.id} `} style={{borderTop: "4px solid #ff2625",}}> 
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazY' />
      <div style={{display: "flex" , }}>
        <button style={{backgroundColor: "#ffa9a9", color: "white", border: "none ", borderRadius: "5px", padding: "5px 15px" , fontSize: "14px", textTransform: "capitalize" , marginLeft: "10px"}}>{exercise.bodyPart}</button>
        <button style={{backgroundColor: "#fcc757", color: "white", border: "none ", borderRadius: "5px", padding: "5px 15px" , fontSize: "14px" , textTransform: "capitalize", marginLeft: "10px"}}>{exercise.target}</button>
      </div>
      <h3 style={{marginLeft: "10px", fontSize: "24px" , textAlign: "left" , textTransform: "capitalize" }}>{exercise.name}</h3>
    </Link>
  )
}

export default ExerciseCard

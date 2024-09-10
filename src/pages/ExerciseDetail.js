import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { exerciseOptions , featchData } from '../utils/featchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimiliarExercises from '../components/SimiliarExercises'


function ExerciseDetail() {

    const [exerciseDetail , setExerciseDetail] = useState({})
    const { id } = useParams();

    useEffect(() => {
      const fetchExercisesData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
        const exerciseDetailData = await featchData(`${exerciseDbUrl}/exercises/exercise/${id}` , exerciseOptions);
        setExerciseDetail(exerciseDetailData);
      }

      fetchExercisesData();
    } , [id])

  return (

    <div>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideo/>
      <SimiliarExercises/>
    </div>
  )
}

export default ExerciseDetail

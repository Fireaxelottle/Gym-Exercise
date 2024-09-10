import React from 'react'
import  Icon  from '../assets/gym.png'

const BodyPart = ({item , setBodyPart , bodyPart}) => {
  return (
    <div className='bodyPart-card' typeof='buttoon' style={{borderTop: bodyPart === item ? "4px solid #ff2625" : "" ,justifyContent: "center" , alignItems: "center" , backgroundColor: "#fff" , borderBottomLeftRadius:"20px" , width: "120px" , height: "140px" , cursor: "pointer" , gap: "40px", textAlign: "center" , padding: "10px 0"}}  onClick={()=>{setBodyPart(item)}}>
      <img src={Icon} alt="Dunbell" style={{height: "40px", width: "40px"}}/>
      <h3>{item}</h3>
    </div>
  )
}

export default BodyPart

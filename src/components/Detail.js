import React from 'react'
import BodyPartImage from '../assets/body-part.png'
import TrgetImage from '../assets/target.png'
import EquipmentImage from '../assets/equipment.png'

const Detail = ({ exerciseDetail }) => {
    const { name , target , equipment , bodyPart , gifUrl} = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TrgetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

  return (
    <div className='detail' style={{display: "flex" , alignItems: "center" , padding: "20px" , textAlign: "left"}}>
     <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
     <div style={{display: "flex", flexDirection: "column" , flexWrap: "wrap"}}>
        <h1 style={{fontSize: "34px", textTransform: "capitalize"}}>
            {name}
        </h1>
        <p style={{fontSize: "24px" }}>
            Exercise keeps you strong. {name} {` `} is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </p>
        {extraDetail.map((item) => (
            <div className='detail-extra' key={item.name} style={{display: "flex" , alignItems: "center" , gap: "60px", marginTop: "10px"}}>
                <button style={{background:"#fff2db", borderRadius: "50%", width: "80px", height: "80px" , border: "none"}}>
                    <img src={item.icon} alt={bodyPart} loading='lazy' className='detail-icon'/>
                </button>
                <p style={{textTransform: "capitalize" , fontSize: "24px"}}>{item.name}</p>
            </div>
        ))}
     </div>
    </div>
  )
}

export default Detail

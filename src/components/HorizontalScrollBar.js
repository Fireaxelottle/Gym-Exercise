import React , {useContext} from 'react'
import BodyPart from './BodyPart'




const HorizontalScrollBar = ( { data , bodyPart , setBodyPart }) => {
  return (
    <div style={{display:"flex" , justifyContent:"space-evenly" , flexWrap:"wrap" , padding:"20px" }}>
      {data.map((item) => (

         <div key={item.id || item}
              itemID={item.id || item}
              title={item.id || item}
              style={{margin:"0 40px", cursor: "pointer"}}
         >
          
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
         </div>     
              
      ))
       
      }
    </div> 
  )
}

export default HorizontalScrollBar

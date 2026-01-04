import React, { useEffect, useState } from 'react'

function About() {
  let [color , setColor] = useState('red') 
  useEffect(()=>{
   
    setTimeout( setColor('purple') , 100000)
  } , [])
  return (
   <>
   <div className='' style={{backgroundColor: `${color}` , height:'90vh'}} >
f
   </div>
   <div className='container-fluid'>
    <div className="container " style={{}} >
      <div className="options bg-primary flex align-item justify-content space-between " style={{display:'flex', alignItems:'center'  , justifyContent:'center' , gap: 50 }}>
      {/* <div onClick={document.getElementById='root'.style.}>Black</div> */}
    <button onClick={()=> {setColor('yellow')}}>Yellow</button>
      
    <button onClick={()=> {setColor('pink')}}>pink</button>
      
    <button onClick={()=> {setColor('orange')}}>Orange</button>
      
      </div>
    </div>
   </div>

   
          
   </>
  )
}

export default About

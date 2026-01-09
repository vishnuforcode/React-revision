import React from 'react'

function IssuesCard({title , state , created_at}) {
  return (
   <>
   <div className="Issues-card m-2 p-3 shadow lg " style={{ border: '1px solid black' , borderRadius:'7px' , backgroundColor:'#001F3D' }}>
    <h5>Title: {title}</h5>
    <p>state : <span style={{color : state=== 'open'? 'green' : 'gray'}}>{state}</span></p>
   
    <p className=''>created at : {created_at}</p>
   </div>
   
   </>
  )
}

export default IssuesCard

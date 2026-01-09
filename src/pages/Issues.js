import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import IssuesCard from './components/IssuesCard';

function Issues() {
    const param = useParams()
    const [issues , setIssues] = useState([])
    const [loading , setLoading] = useState(true)
        console.log(param.name);
        
        useEffect(()=>{
        
        const name = param.name
        fetch(`https://api.github.com/repos/vishnuforcode/${name}/issues`)  // this api returns issues + pull_requests ,,, make it filter them 
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{
          
           setIssues(res)
    
          setLoading(false)
        })

    },[param.name] )
    

    console.log(issues)

    const formatDateTime = (isoDate) => {
  const date = new Date(isoDate);
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    
  
  });
};

  return (
   <>
<div
        className="page vh-100 vw-100 "
        style={{
          backgroundColor: "#2b3137 ",
          color: "white",
          overflow: "hidden",
        }}
      >
   
  

  {!loading && issues.length === 0 && (
    <div className="container text-center mt-4">
         <h5>This repository has no issues 🎉</h5>
    </div>
       
      )}

      {
        !loading && issues.length >0 && (
            <div className="container-fluid">
    <div className="container">
        <div className="row mt-2">
            <h3>Issues :</h3>
            <div className="col d-flex flex-column">
                          {
                           
                             Array.isArray(issues) && issues.map((issue)=>(
                                <IssuesCard key={issue.id} title={issue.title} state={issue.state} created_at={formatDateTime(issue.created_at)}/>
                            ))
                          }
            </div>
        </div>
    </div>

   </div>
        )
      }


   </div>
  
   
   </>
  )
}

export default Issues

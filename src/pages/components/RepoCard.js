import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function RepoCard({ repo }) {
    // console.log(repo.html_url);
    
  return (
    <div className=" mb-4 " >
      <div className="card h-100 shadow-lg  " style={{backgroundColor:'#001F3D'}}>

        <div className="card-body" >
          <Link   className="card-title text-primary h3  text-decoration-none">
            {repo.name}
          </Link>
           

          <p className="card-text small" style={{color:'white'}}>
            {repo.description || "No description provided"}
          </p>
          
          <Link to={`/repo/${repo.name}/issues`} className='text-decoration-none small ' style={{fontSize:'18px'}}> issues <i class="fa-solid fa-arrow-right"></i></Link>
        </div>

        <div className="card-footer bg-light">
          <small className="text-secondary">
            <strong>Full name:</strong> {repo.full_name}
          </small>
        </div>

      </div>
    </div>
  )
}


export default RepoCard

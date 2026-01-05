import React from 'react'
import { Link } from 'react-router-dom'

function RepoCard({ repo }) {
    // console.log(repo.html_url);
    
  return (
    <div className=" mb-4" >
      <div className="card h-100 shadow-sm">

        <div className="card-body">
          <a  href={repo.html_url} className="card-title text-primary h3  text-decoration-none">
            {repo.name}
          </a>

          <p className="card-text text-muted small">
            {repo.description || "No description provided"}
          </p>
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

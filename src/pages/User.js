import React, { useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import RepoCard from "./components/RepoCard";
import githubTile from "../hooks/github-tile.svg";



function User() {
  const [userdata, setUserData] = useState();
  // const [userRepo , setUserrepo] = useState('')
  const [userName, setUserName] = useState("vishnuforcode");
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState();

  const findUser = async () => {
    setLoading(true);
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setUserData(res);
        // setUserrepo(res.login)
        setLoading(false);
      })
      .catch((errr) => {
        console.log(errr);
        setLoading(false);
      });

    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if(Array.isArray(res)){
          setRepos(res);
        }
        else{
          setRepos()
        }
        //  console.log(res);
        
      });
  };

 

  //  const param =  useParams('id')
  //  console.log(param);

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
        <div className="container-fluid ">
          <div className="container ">
            <div className="row justify-content-center justify-content-between align-items-center">
              <div className="col-3 text-center d-flex  justify-content-even  " style={{ height:'60px'}} >
                <img className="img-fluid me-2"style={{borderRadius:100 }}  src= {githubTile} alt="" />
                <h3 className="pt-2">Github-Finder</h3>
              </div>
              <div className="col-4 p-3 d-flex align-items-center">
                <label htmlFor="">UserName:</label>
                <input
                style={{color:'white' , backgroundColor:'#010409' , borderRadius:'7px' , border:'1px solid gray'}}
                
                  type="text"
                  className="m-2 p-2"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />

                <button className="btn btn-primary " onClick={findUser}>
                  Find
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="container">
          <div className="row justify-content-start gap-2">
            <div className="col-4 d-flex justify-content-center">
              {loading ? (
                "loading..."
              ) : userdata ? (
                <div className="">
                  <div className="mb-3 " style={{borderRadius:'50%'}}>
                    <img
                      className="img-fluid  "
                      src={`https://avatars.githubusercontent.com/u/${userdata.id}?v=4"`}
                      alt="avatar"
                      style={{ borderRadius:100 , borderWidth:'2px solid red'}}
                    />
                  </div>
                  <br />
                  <div className="text">
                    Bio : {userdata.bio}
                    <br />
                    Repositories :{userdata.public_repos}
                  </div>
                  <i className="fa-brands fa-github"></i>{" "}
                  <a
                    className="btn btn-primary w-full"
                    href={userdata.html_url}
                  >
                    Github{" "}
                  </a>
                </div>
              ) : null}
            </div>

            {userdata ? (
              <div
                className="col-7  "
                style={{
                  border: "2px solid gray",
                  borderRadius:'10px',
                  height: "550px",
                  
                  overflowY: "auto",
                }}
              >
                <div className=" d-flex flex-column " >
                  <div className="mt-2">
                    {Array.isArray(repos) && repos.map((repo) => (
                      <RepoCard key={repo.id} repo={repo} />
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default User;

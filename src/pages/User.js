import React, { useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import RepoCard from "./components/RepoCard";
import { useRef } from "react";
import githubTile from "../hooks/github-tile.svg";
import "./user.css"




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
  const containerRef = useRef(null)
   const [showArrow, setShowArrow] = useState(true);
  const handleScroll = () => {
    const el = containerRef.current;

    if (!el) return;

    const isAtBottom =
      el.scrollTop + el.clientHeight >= el.scrollHeight - 5;

    setShowArrow(!isAtBottom);
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
        <div className="container-fluid ">
          <div className="container ">
            <div className="row justify-content-center justify-content-between align-items-center">
              <div className="col-3 text-center d-flex  justify-content-even  " style={{ height:'60px'}} >
                 <i className="fa-brands fa-github fa-3x" ></i>
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
        <hr className="m-0 p-0" />

        <div className="container mt-2">
          <div className="row justify-content-around">
            
            <div className="col-4 d-flex justify-content-center">
              
              {loading ? (
                "loading..."
              ) : userdata ? (
                <div className="m-3">
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
                  
                  <a
                    className="btn btn-primary d-flex w-full align-items-center "
                    href={userdata.html_url}
                  >
                    <i className="fa-brands fa-github fa-2x "></i>
                   <p className="h6 m-auto">GitHub</p>
                  </a>

                  
                </div>
                

              ) : null}

             
            </div>
            
                 
            {userdata ? (
              
              <div
                className=" col-6 d-flex flex-column "
                style={{
                  
                  borderRadius:'10px',
                  height: "400px",
                  width:"550px" ,
                  
                  overflow: "auto",
                  scrollbarWidth:'none',
                  position:'relative'
                   
                  // overflowX: "auto",
                }}
                ref={containerRef} 
                onScroll={handleScroll}
              >
                <div>
              <p className="h4 "> Repositories :</p>
              </div>
                  <div className="mt-2" >
                    {Array.isArray(repos) && repos.map((repo) => (
                      <RepoCard key={repo.id} repo={repo} />
                    ))}
                  </div>
                  {/* Floating arrow */}
      {showArrow && (
        <div className="scroll-arrow "  onClick={() =>
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    })
  }>
          <i className="fa-solid fa-arrow-down" style={{color:'#5A7ACD' , fontSize:'30px' , fontWeight:'bolder'}}></i>
        </div>
      )}
                
              </div>
            ) : null}
          </div>
        </div>
        
     <div className="back " style={{position:'fixed', bottom:'2px', zIndex:'1000'}}>
         <i class="fa-solid fa-arrow-left"></i>
          <Link className="text-decoration-none text-white" to={"/"}>back home</Link>

          </div>
      </div>
    </>
  );
}

export default User;

import React, { useEffect, useState } from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import {Link} from 'react-router-dom'

function CustomHooks() {
  // let arr = ['hi' , 'inr' , 'usd']
  const [fromCurr, setfromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("inr");
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);
  const data = useCurrencyInfo(fromCurr);
  //    console.log(data);
  // console.log(arr)
  let multiplyinfo = data[toCurr] || 0 ;
  // console.log(multiplyinfo);

  let ans = fromValue * multiplyinfo;
  // console.log(Math.floor(ans));

  useEffect(() => {
    setToValue(Number(ans));
  }, [fromValue, toCurr, multiplyinfo]);

  const changeCurr = ()=>{
    setfromCurr(toCurr);
  setToCurr(fromCurr);
    
  }

  return (
    <>
    <div className="page img-fluid" style={{backgroundImage: "url('/images/bg.jpeg')" , minHeight:'100%' }}>

    
      <div className="container-fluid shadow lg bg-white p-3 mt-3">
        <div className="container">
          <div className="row m-0 p-0">
            <div className="col-12 text-center">
              <div className="text h3">Currency converter
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <section
        className="container-fluid d-flex  align-items-center p-0 m-0 "
        style={{ height: "70vh" }}
      >
        <div className="container   ">
          <div className="row justify-content-center align-items-center   ">
            <div className="col-6 rounded " style={{backgroundColor:'rgba(255, 255, 255, 0.20)'}} >
              <div
                className="row d-flex  flex-column "
                style={{ gap:'2px' }}
              >
                <div className="col p-3 bg-white rounded " style={{}}>
                  <form action="" className="form  ">
                    <label htmlFor="" className="form-label">
                      From :
                    </label>
                    <br />
                    <input
                      type="text"
                      className=" form-control"
                      value={fromValue}
                      onChange={(e) => {
                        setFromValue(e.target.value);
                      }}
                      placeholder="enter amount"
                    />

                    <select
                     className="select"
                      name="currency"
                      value={fromCurr}
                      onChange={(e) => {
                        setfromCurr(e.target.value);
                      }}
                    >
                      {Object.keys(data).map((curr) => (
                        <option key={curr} value={curr}>
                          {curr}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
               
                  <button
                    className="btn btn-primary  "
                    style={{ width: "100px" , zIndex:'2',  overflow:'', margin:'auto'}}
                    onClick={changeCurr}
                  >
                    swap
                  </button>
              

                <div className="col p-3 bg-white  rounded " style={{ }}>
                  <form action="" className="form ">
                    <label htmlFor="" className="form-label">
                      To :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={toValue}
                      placeholder="enter amount"
                    />

                    <select
                      name="currency"
                      value={toCurr}
                      onChange={(e) => {
                        setToCurr(e.target.value);
                      }}
                      id=""
                    >
                      {Object.keys(data).map((curr) => (
                        <option key={curr} value={curr}>
                          {curr}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <Link to={'/'} >back home</Link>


      {/* <div className="row bg-white ">
                <div className="col p-5 d-flex gap-4">
                   
                </div>
            </div>

            <div className="row">
                <div className="col p-5 d-flex gap-4">
                   
                </div>
            </div> */}
            </div>
    </>
  );
}

export default CustomHooks;

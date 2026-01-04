import React from "react";
import { useSelector } from "react-redux";

function Card(props) {

  const count = useSelector((state) => state.counter) 

  return (
    <>

    count = {count}

    
      <div className="container  ">
        <div className="row">
          <div className="card col-lg-3 bg-primary col-md-6 width-3">
            <div className="image bg-danger text-center">{props.image}</div>
            <div className="text b-2">{props.text}</div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Card;

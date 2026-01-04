import logo from "./logo.svg";
import "./App.css";
import { Route, Routes , Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
import Card from "./pages/Card";
import HooksUse from "./pages/HooksUse";
import CountCoponent from "./pages/countCoponent";
import CustomHooks from "./pages/customHooks";


function App() {

  let [count ,setcount] = useState(0) 
 
  
  const Incclicked =()=>{
    setcount(count++)
  }

const decclicked =()=>{
   
    setcount(count--)
  }
  
 
  
let arr = [1,2,3]

  return (
    <>

      

      {/* <Routes>
        <Route path="home" element={<Home name="hello" />} />
        <Route path="about" element={<About/>} />
          <Route path="counter" element={<CountCoponent/>} />
          <Route path="customhooks" element={<CustomHooks/>} />
        <Route path="*" element={<Home/>} />
      
        {/* <Route path="contact" element={</>} /> */}
      {/* </Routes> */} */

      

   {/* <About/> */}
   {/* <HooksUse/> */}
      {/* <Link to={"/home"}>Home</Link>  */}
   {/* <Home name="hello" arr = {arr} /> */}
   {/* <div className="container">
    <div className="row flex ">
      <div className="col-lg-4 col-md-2 ">
    <Card image="this is image from prop1" text= "this is text from props" />

      </div>
      <div className="col-lg-4 col-md-2 ">
    <Card image="this is image from prop1" text= "this is text from props" />

      </div>
      <div className="col-lg-4 col-md-2 ">
    <Card image="this is image from prop1" text= "this is text from props" />

      </div>
      <div className="col-lg-4 col-md-2 ">
    <Card image="this is image from prop1" text= "this is text from props" />

      </div>
     
  
   </div>
   </div>
   
     <h1>Hello thsi is react</h1>
     <h3>Count Vlaue : {count} </h3>
     
     <button onClick={Incclicked}>Increase </button>
     <button onClick={decclicked}   >Decrease </button>
     */}

 



    </>
  );
}

export default App;

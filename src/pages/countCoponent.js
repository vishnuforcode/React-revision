import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addCount, decCount } from './slices/couterSlice'
import Card from './Card'


function CountCoponent() {
   const dispatch = useDispatch()

   const count  = useSelector((state)=> state.counter)

 const inc=()=>{
    console.log("inside inc");
    
    dispatch(addCount())

 }
 const dec =()=>{
    console.log("inside dec");
    
    dispatch(decCount())

 }

  return (
    <>
    <div className="row justify-content-center" >
        <div className="col-12">


     count == {count}
    <button onClick={inc}>increase count</button>
    <button onClick={dec}>decrease count</button>
    


    <Card text = 'vishnu' image='hello image '/>
        </div>
    </div>
    
   
    </>
    
  )
}

export default CountCoponent

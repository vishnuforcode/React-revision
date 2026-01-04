import { createSlice } from "@reduxjs/toolkit";

const initialState = 0 

export const counterSlice = createSlice({
    name:'countSlice',
    initialState ,
    reducers : {
        addCount : (state, action) =>{
        return state+ 1
        },

        decCount: (state , action)=>{
            return state- 1
        }
    }

})


export const {addCount , decCount}  = counterSlice.actions 

export default counterSlice.reducer
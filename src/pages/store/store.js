import {configureStore} from '@reduxjs/toolkit'
import countReducers  from '../slices/couterSlice'


export const store  = configureStore({
    reducer :{
        counter : countReducers
    } ,
})

export default store ;
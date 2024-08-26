import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        reloadUser:true,
    },

    reducers:{
        setUser:(state,action)=>{
            state.user= action.payload
        },
    }
})

export const {setUser,reloadUserData} = userSlice.actions;
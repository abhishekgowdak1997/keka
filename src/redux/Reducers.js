import { createSlice } from "@reduxjs/toolkit";


const initialState={
    EMAIL_VALUE:"Abhishek",
    CAPTCHA_VALUE:""
}

const userReducer= createSlice({
    name:"getEmail",
    initialState,
    reducers:{
        setEmailValue:(state,action)=>{
         state.EMAIL_VALUE=action.payload
        },
        setCaptchaEnteredValue:(state,action)=>{
        state.CAPTCHA_VALUE=action.payload
        }
    }
})


export const {setEmailValue,setCaptchaEnteredValue}=userReducer.actions
export default userReducer.reducer

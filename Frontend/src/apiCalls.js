import axios from "axios";
import { API_URL } from "./assets/API/API_URL";


export const loginCall = async (userCredential,dispatch) => {
    dispatch({type:"LOGIN_START"});
    try{
        const res = await axios.post(API_URL+"/auth/login",userCredential);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data})
    }catch(err){
        if(err.response.status===400)
            alert("Wrong Password");
        else
            alert("User not registered")
        dispatch({type:"LOGIN_FAILURE",payload:err})
    }
}

export const logout = async(dispatch) => {
    dispatch({type:"LOGOUT"});
}
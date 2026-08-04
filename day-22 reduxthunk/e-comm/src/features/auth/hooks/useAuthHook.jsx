import {useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { loginUserApi } from "../api/authApi";


export const useAuth = ()=>{
  let navigate = useNavigate();

    let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const registerForm = (data) => {
    console.log("register", data);
  };

  const loginForm = async (data) => {
    try{
   let response = await loginUserApi(data);
   console.log(response)
    } catch (error){
      console.log("from api error", error);
    }
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    registerForm,
    loginForm,
  };
};

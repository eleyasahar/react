import {  useRef, useState } from "react"
import { useForm } from "react-hook-form"
const RHF = () => {

let{register, 
  handleSubmit, 
  reset,
  formState:{ errors },
} =useForm();

  return (
    <div className='w-80 h-100 bg-white '>
    <form 
    onSubmit={handleSubmit((data)=>{
      console.log(data);
    })}
   
    className="flex flex-col gap-4 p-6  rounded" >
      <input 
      {...register("productName")}
      className ="p-2 border border-b-gray-400 rounded"
       type="text"
        placeholder="product name"/>

      <input       {...register("price")}
       className ="p-2 border border-b-gray-400 rounded"
        type ='text' 
        placeholder='price'/>
      <span>Select Category</span>

      <select        {...register("category")}
       className='p-2 border border-gray-400'>
        <option value ="Mens">Mens</option>
        <option value ="women">Women</option>
        <option value ="kids">Kids</option>
      </select>

      <input       {...register("image ")}
      className ="p-2 border border-b-gray-400 rounded" type="text" placeholder="image"/>
      <button className="p-2 bg-blue-500 text-white rounded ">CREATE</button>
    </form>
    </div>
  )
}

export default RHF

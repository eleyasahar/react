import {  useRef, useState } from "react"

const Form = () => {

const formRef = useRef({})
console.log(formRef);

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(formRef.current.productName.value)
  console.log(formRef.current.price.value)
  console.log(formRef.current.category.value)
  console.log(formRef.current.image.value)
  
  
 
}

  return (
    <div className='w-80 h-100 bg-white '>
    <form 
   onSubmit={handleSubmit}
    className="flex flex-col gap-4 p-6  rounded" >
      <input 
      ref={(e)=> (formRef.current.productName = e)}
      className ="p-2 border border-b-gray-400 rounded"
       type="text"
        placeholder="product name"/>

      <input 
      ref={(e)=>(formRef.current.price = e)}
       className ="p-2 border border-b-gray-400 rounded"
        type ='text' 
        placeholder='price'/>
      <span>Select Category</span>

      <select  ref={(e)=>(formRef.current.category = e)}
       className='p-2 border border-gray-400'>
        <option value ="Mens">Mens</option>
        <option value ="women">Women</option>
        <option value ="kids">Kids</option>
      </select>

      <input  ref={(e)=>(formRef.current.image = e)}className ="p-2 border border-b-gray-400 rounded" type="text" placeholder="image"/>
      <button className="p-2 bg-blue-500 text-white rounded ">CREATE</button>
    </form>
    </div>
  )
}

export default Form

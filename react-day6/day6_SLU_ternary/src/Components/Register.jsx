import React, { useState } from 'react';

const Register = ({ setToggle, setUsers }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    image: ''
  });

  const handleChange = (e) => {
    let { name, value } = e.target; 
    setFormData({ ...formData, [name]: value});
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    console.log("Submitted User:", formData); // Checked right away
    setFormData({  
    name: "",
      email: "",
      password: "",
      image: ""
     });

  };

  return (
    <div className='bg-white w-90 p-6 rounded flex flex-col gap-4'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
        value={formData.name} 
        name='name' onChange={handleChange} 
        className='p-2 border border-gray-400 rounded' type="text" placeholder='Name' required />
        <input 
        value={formData.email} 
        name='email' onChange={handleChange}
         className='p-2 border border-gray-400 rounded' type="text" placeholder='Email' required />
        <input
         value={formData.password} 
         name='password' onChange={handleChange}
          className='p-2 border border-gray-400 rounded' type="password" placeholder='Password' required />
           <input
         value={formData.image} 
         name='image' onChange={handleChange}
          className='p-2 border border-gray-400' type="text" placeholder='Image URL' />
        <button className='bg-blue-500 text-white p-2 rounded'>Register</button>
      </form>
      <p>Already have an account? <span onClick={() => setToggle(prev => !prev)} className='text-blue-600 cursor-pointer'>Login Here</span></p>
    </div>
  );
};

export default Register;
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosInstance';

const ProductPage = () => {

  const [productsData, setProductData] = useState([])

  let getProductsData = async () => {
    try{
      let res = await axiosInstance.get("/products")
      console.log(res);
      setProductData (res.data)


    }catch (error){
      console.log("error in products api" , error)
    }
  };

  useEffect(()=> {
    getProductsData()
  },[])

  return (
    <div className='grid grid-cols-4 gap-5'>
    {
      productsData.map((val)=>(
        <ProductCard key={val.id} product={val}/>
      ))
    }
    </div>
  )
}

export default ProductPage

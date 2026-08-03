import { axiosInstance } from "../config/axiosinstance";

export let getProductsDataApi = async () => {
    try {
      let res = await axiosInstance.get("/products");
    
      return res.data.products;
    } catch (error) {
      console.log("Error in Products API:", error);
    
    }
  };
  
import React, { useEffect } from 'react'
import { createBrowserRouter,RouterProvider} from "react-router"
import AuthLayout from "../app/layout/AuthLayout"
import PublicProtected from './protected/publicProtected'
import LoginPage from "../features/auth/ui/pages/LoginPage"
import RegisterPage from "../features/auth/ui/pages/RegisterPage" 
import MainProtected from './protected/MainProtected'
import MainLayout from "../app/layout/MainLayout"
import HomePage from "../shared/ui/pages/HomePage"
import ProductPage from "../features/products/ui/page/ProductPage"
import CartPage from "../features/cart/ui/pages/CartPage";
import OrderPage from "../features/order/ui/pages/OrderPage"
import { hydrateUser } from '../features/auth/api/authApi'

const AppRoutes = () => {

  useEffect(()=>{
    (async ()=>{
      try{

        let response = await hydrateUser();
        console.log(response)
      }catch(error) {
        console.log("error in hydration..", error)
      }
    }) (); 

  }, [])
  let router = createBrowserRouter ([
    {
      path: "/",
      element: <PublicProtected/>,
      children: [
        {
          path: '',
          element: <AuthLayout/>,
          children:[
            {
              path: "",
              element: <LoginPage/>
          },
          { path: "register",
          element: <RegisterPage/>
          },
          ]
        }
      ]
    },

  {
    path : "/main",
    element: <MainProtected/>,
    children: [
      {
        path: "",
        element: <MainLayout/>,
        children:[
         { path: "",
          element: <HomePage/>,
         },
         { path: "Product",
          element: <ProductPage/>,
         },
         { path: "cart",
          element: <CartPage/>,
         },
         { path: "order",
          element: <OrderPage/>,
         },
        ]

      }
    ]
  }
  ]);





  return <RouterProvider router={router}/>
}

export default AppRoutes

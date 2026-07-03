import React from 'react'
import ProductsCard from './ProductsCard.jsx'

const App = () => {
  const [productsData, setProductsData] = React.useState([
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      name: "iPhone 15",
      category: "Mobile",
      price: 79999,
      description: "Latest Apple smartphone with A16 Bionic chip."
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
      name: "Samsung Galaxy S24",
      category: "Mobile",
        price: 74999,
    description: "Premium Android smartphone with powerful camera."
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    description: "Noise-canceling wireless headphones with premium sound."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",  
    name: "Dell XPS 15",
    category: "Laptop",
    price: 149999,
    description: "High-performance laptop for developers and creators."
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    name: "Nike Air Max",
    category: "Shoes",
    price: 8999,
    description: "Comfortable and stylish running shoes."
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    name: "Apple Watch Series 9",
    category: "Smartwatch",
    price: 45999,
    description: "Fitness tracking and health monitoring smartwatch."
  },
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    name: "Canon EOS R50",
    category: "Camera",
    price: 67999,
    description: "Mirrorless camera for photography and vlogging."
  },
  {
    id: 8,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    name: "HP Pavilion Gaming",
    category: "Laptop",
    price: 82999,
    description: "Gaming laptop with RTX graphics and fast refresh display."
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    name: "JBL Flip 6",
    category: "Speaker",
    price: 11999,
    description: "Portable Bluetooth speaker with deep bass."
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500",
    name: "Adidas Backpack",
    category: "Accessories",
    price: 2499,
    description: "Durable and stylish backpack for daily use."
  }
  ]);



const deleteProduct = (id) => {
  let products = productsData.filter((elem) => elem.id !== id);
  setProductsData(products);
};

  return (
    <div>
      <h1 className ="text-2xl">Hey now data rendring </h1>
      <div className='flex flex-wrap gap-4'>
      {productsData.map((elem) => {
        return <ProductsCard key={elem.id} product={elem} del={deleteProduct}/>
      })}
      </div>
      </div>
  )
}

export default App;

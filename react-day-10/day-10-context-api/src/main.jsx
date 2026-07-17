import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './components/Test.jsx'
import { MyShopContextProvider } from './Context/MyWebsite.jsx'


createRoot(document.getElementById('root')).render(
 <MyShopContextProvider>
    <App/>
 </MyShopContextProvider>

  
)

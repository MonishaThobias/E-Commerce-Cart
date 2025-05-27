import { createBrowserRouter } from "react-router";
import Home from "./Components/Home";
import ProductView from "./Components/ProductView";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ProductDetails from "./Components/ProductDetails"; 
import { ProductLoader } from "./Components/ProductLoader";
import NotFound from "./Components/NotFound";
import CartView from "./Components/CartView";


const router = createBrowserRouter([
  
  { path: '/', Component: Home },
  { path: '/products', Component: ProductView },
  { path: '/login', Component: Login },
  { path: '/register', Component: Register },
  {
    path: '/products/:id',
    Component: ProductDetails,
   loader: ProductLoader,
    errorComponent: NotFound,
  },
  
  {path:'/cart', Component: CartView},
 
]);

export default router;

import MainLayout from "../layout/MainLayout";
import About from "../pages/About";
import AddProduct from "../pages/AddProduct";
import EditProduct from "../component/EditProduct";
import Home from "../pages/Home";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";

export const mainRoutes=[
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"home",
                element:<Home/>
            },
            {
                path:"product",
                element:<Product/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"product/add",
                element:<AddProduct/>
            },
            {
                path:"product/details/:productId",
                element:<ProductDetail/>
            },
         
            
        ]
    }
    
]
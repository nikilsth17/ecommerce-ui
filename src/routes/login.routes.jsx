import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MinimumLayout from "../layout/MinimumLayout";

export const loginRoutes=[
    {
        path:"/",
        element:<MinimumLayout/>,
        children:[
            {
                path:"/register",
                element:<Register/>
        
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }
    
]
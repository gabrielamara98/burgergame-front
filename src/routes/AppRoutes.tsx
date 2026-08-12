import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Menu } from "../pages/Menu";
import { Reserve } from "../pages/Reserve";

export const router = createBrowserRouter([{
    path: '/',
    element: <MainLayout/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'about',
            element:<About/>
        },
        {
            path:'menu',
            element:<Menu/>
        },
        {
            path:'reserve',
            element:<Reserve/>
        },
    ]
}])
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function MainLayout(){
    return(
        <>
        <Header/>
        <main className="p-24">
            <Outlet/>
        </main>
            
        </>
        
    )
}
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css"
import Section from "./components/section";

function Home(){

    const [user, setUser]=useState("");

    useEffect(()=>{
         setUser("Pedro")
    },[])
   
    return(
        <Fragment>
            <main className="container flex ">
             <aside className="flex flex-col justify-start items-center asideCont ">
                <h3 className="font-semibold">Usuario</h3>
                <h2 className="font-bold text-2xl pt-1">Hola {user}</h2>
                <h3 className="font-semibold pt-2">Carpetas</h3>
                <Link to="/carpeta"  className="carpeta pt-2 "><i class="bi bi-folder-plus flex gap-2 items-center">Crear Carpeta</i></Link>
             </aside>
        <div className="flex justify-end items-start cont-section">
            <Section/>
        </div>
                

            </main>
        </Fragment>
    )
}
export default Home;
import { Fragment, useState, useEffect } from "react";
import "./index.css"
import Section from "./components/section";
// import Main from "./components/homepage/main";
import { Link } from "react-router-dom";

function Home(){
  

    const [carpetas, setCarpetas]=useState([]);

    // const [user, setUser]=useState("");

    const traerCarpeta=async()=>{
        await fetch("http://localhost:5000/")
        .then((res)=>{return res.json()})
        .then((data)=>{setCarpetas(data)})
        .catch((err)=>{console.log(err)})
        
    }

    useEffect(()=>{
        traerCarpeta()
    },[])
    // console.log(carpetas);
   
    return(
        <Fragment>
          <Fragment>
            <main className="container flex justify-center items-center">
             <aside className="flex flex-col justify-start items-center asideCont ">
                <h3 className="font-semibold">Usuario</h3>
                <h2 className="font-bold text-2xl pt-1">Hola </h2>
                <h3 className="font-semibold pt-2">Carpetas</h3>
                <ul className="ul-carp flex flex-col justify-center items-center">
                    {carpetas.map((carp)=>{
                        return <Link className="bi bi-folder flex gap-2 items-center titulo-carp" key={carp.id}>{carp.titulo}</Link>
                    })}
                </ul>
                <Link to="/carpeta"  className="carpeta pt-2 "><i className="bi bi-folder-plus flex gap-2 items-center">Crear Carpeta</i></Link>
             </aside>
        <div className="flex justify-center items-start cont-section">
            <Section carp={carpetas} />
        </div>
                

            </main>
        </Fragment>
             
        
                

            
        </Fragment>
    )
}
export default Home;
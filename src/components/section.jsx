import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tarjetas from "./tarjetas";


function Section(){
    
    const[carpetaEliminada, setCarpetaEliminada]=useState(false);
    

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

   
console.log(carpetas);
  

    return(
        <Fragment>
        
           
           <div className="flex flex-col section">
                <div className="flex justify-between items-center pt-5 pr-3 div-sect">
                   
                    <h3 className="font-bold text-3xl">Carpetas:</h3>
                    
                
                <Link to="/carpeta" className="boton font-semibold create-carp">Crear carpeta +</Link>
                </div>

                <div className="sect-contenido">
                 
                            <Tarjetas carpeta={carpetas} />
                      
                    
                 
                </div>
            </div>
            
        </Fragment>
    )
}
export default Section;
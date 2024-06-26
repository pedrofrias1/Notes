import { Fragment, useState } from "react";
import "./components.css"
function Carp(){

    
    // const [metodo, setMetodo]=useState("");
    const [opOk, setOpOk]= useState("");

    const cargarCarpeta=async(event)=>{
        event.preventDefault();
        const form ={
            "titulo":event.target[0].value,
            "description":event.target[1].value
        }

    await fetch("http://localhost:5000/cargarCarpeta",{
                method:"post",
                body:JSON.stringify(form),
                headers:{
                    'Content-type':"application/json"
                }
            })
            .then((res)=>console.log(res))
            .then(data=> event.target.reset())
            .catch((err)=>console.log(err))


    }

           
    

    return(
        <Fragment>
            <div className="cart flex flex-col justify-center items-start mt-5">
                <h3 className="font-bold text-2xl pb-3">Carpeta</h3>
            {  opOk === ""?
            
            <form action="http://localhost:5000/cargarCarpeta" onSubmit={(event)=>cargarCarpeta(event)} method="POST">
                <div className="flex flex-col gap-2">
                     <textarea className="item text-2xl font-semibold" placeholder="Ingrese su nombre de carpeta" autoComplete="off" name="titulo" id="titulo" cols="35" rows="5" required></textarea>
                     <textarea className="item text-2xl font-semibold" placeholder="descripción" autoComplete="off" name="description" id="description" cols="35" rows="5" required></textarea>
                </div>
                  
                <div className="flex justify-center items-end gap-2 pt-3">
                    
                    <input type="submit" value="cargar" className="font-semibold"/> 
                   
                </div>    
                </form>:
                <p>Carpeta cargada exitosamente</p>
                }
            </div>
            
        </Fragment>
        
    )
}
export default Carp;
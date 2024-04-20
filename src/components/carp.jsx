import { Fragment, useState } from "react";

function Carp(){

    
    const [metodo, setMetodo]=useState("");
    const [opOk, setOpOk]= useState(false);

    const cargargarCarpeta=async(e)=>{

    }
    return(
        <Fragment>
            <div className="cart flex flex-col justify-center items-start mt-5">
                <h3 className="font-bold text-2xl pb-3">Carpeta</h3>
                <form action="http://localhost:5000/cargarCarp" onSubmit={(event)=>cargargarCarpeta(event)} method="POST">
                   <textarea className="item text-2xl font-semibold" placeholder="Ingrese su nombre de carpeta" autoComplete="off" name="titulo" id="titulo" cols="35" rows="5" required></textarea>
                <div className="flex justify-center items-end gap-2 pt-3">
                   <i class="bi bi-x-square-fill text-2xl"></i>
                   <i class="bi bi-floppy text-2xl"></i> 
                   <input type="submit" value="enviar" />
                </div>    
                </form>
                
            </div>
            
        </Fragment>
        
    )
}
export default Carp;
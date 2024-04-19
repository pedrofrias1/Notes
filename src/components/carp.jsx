import { Fragment } from "react";

function Carp(){

    return(
        <Fragment>
            <div className="cart flex flex-col justify-center items-start">
                <h3 className="font-bold text-2xl pb-3">Carpeta</h3>
                <input type="text" placeholder="Título" className="text-3xl"/>
                <div className="flex justify-center items-end gap-2 pt-3">
                   <i class="bi bi-x-square-fill"></i>
                <i class="bi bi-floppy"></i> 
                </div>   
            </div>
            
        </Fragment>
        
    )
}
export default Carp;
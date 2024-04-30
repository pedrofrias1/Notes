import { Fragment } from "react";
import { Link } from "react-router-dom";





export default function Nav(params) {
    return(
        <Fragment>
            <nav className="flex justify-between items-center pt-5 pl-4 pr-4">
                <h3 className="font-bold text-3xl">Organizer</h3>
                <div className="flex gap-2 items-center">
                   <Link to="/" className="btn font-semibold">Inicio</Link>
                   <a href="" className="btn font-semibold boton-inicio">Cerrar sesión</a> 
                </div>  
            </nav>
        </Fragment>
    )
}

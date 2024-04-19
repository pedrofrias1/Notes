import { Fragment } from "react";
import { Link } from "react-router-dom";

function Section(){
    return(
        <Fragment>
            <div className="flex flex-col">
                <div className="flex justify-between items-center pt-5 pr-3 div-sect">
                <h3 className="font-bold text-3xl">No tienes carpetas aún</h3>
                <Link to="/carpeta" className="boton font-semibold">Crear carpeta +</Link>
            </div>

            <div className="sect-contenido">

            </div>
            </div>
            
        </Fragment>
    )
}
export default Section;
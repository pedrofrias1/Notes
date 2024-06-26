import { Link } from "react-router-dom";

const { Fragment } = require("react");

function Nav(params) {
    return(
        <Fragment>
            <nav className="flex justify-between items-center pt-5 pl-4 pr-4">
                <h3 className="font-bold text-3xl">Organizer</h3>
                <div className="flex gap-2 items-center">
                   <Link to="/registro" className="btn font-semibold">Registrarse</Link>
                   <Link to="/login" className="btn font-semibold boton-inicio">Iniciar sesión</Link> 
                </div>  
            </nav>
        </Fragment>
    )
}
export default Nav;
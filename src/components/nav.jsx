const { Fragment } = require("react");

function Nav(params) {
    return(
        <Fragment>
            <nav className="flex justify-between items-center pt-5 pl-4 pr-4">
                <h3 className="font-bold text-3xl">Organizer</h3>
                <div className="flex gap-2 items-center">
                   <a href="" className="btn font-semibold">Registrarse</a>
                   <a href="" className="btn font-semibold boton-inicio">Iniciar sesión</a> 
                </div>  
            </nav>
        </Fragment>
    )
}
export default Nav;
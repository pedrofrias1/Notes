import { Fragment } from "react";
import Nav from "./components/inicioPage/nav";
import "./index.css"
import Main from "./components/inicioPage/main"

function Inicio(params) {
    
    return(
        <Fragment>
            <Nav/>
                <Main/>
        </Fragment>
    )
}
export default Inicio;
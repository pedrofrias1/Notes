import { Fragment } from "react";
import Nav from "./components/nav";
import "./index.css"
import Main from "./components/main";

function Inicio(params) {
    
    return(
        <Fragment>
            <Nav/>
                <Main/>
        </Fragment>
    )
}
export default Inicio;